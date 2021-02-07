import {
  Collection,
  Smart,
  QueryBodyType,
  IQueryOptions,
  MongoFilterQuery,
} from "@kaviar/x-ui";
import { Constructor, ContainerInstance, Inject } from "@kaviar/core";

//
// The initial filters need to be kept
// Only options juggle should be sort order?

type ListState<T = any> = {
  isLoading: boolean;
  isError: boolean;
  isCountLoading: boolean;
  isCountError: boolean;
  documents: T[];
  filters: MongoFilterQuery<T>;
  options: IQueryOptions<T>;
  currentPage: number;
  perPage: null | number;
  totalCount: number;
  errorMessage: string;
  countErrorMessage: string;
};

type ListConfig<T = any> = {
  collectionClass: Constructor<Collection<T>>;
  body: QueryBodyType<T>;
  perPage?: null | number;
};

type LoadOptions = {
  /**
   * When page changes or when sort filters are applied, the count doesn't change
   * This is why we only count when filters change and initially
   */
  count?: boolean;
};

export class ListSmart<T = any> extends Smart<ListState<T>, ListConfig<T>> {
  @Inject(() => ContainerInstance)
  protected readonly container: ContainerInstance;

  protected collection: Collection<T>;
  protected initialFilters: MongoFilterQuery<T>;

  state = {
    isLoading: true,
    isError: false,
    documents: [],
    filters: {},
    options: {},
    isCountLoading: true,
    isCountError: false,
    errorMessage: "",
    countErrorMessage: "",
    totalCount: 0,
    currentPage: 1,
    // What if I want to pass it through config? Maybe update it there.
    perPage: 20,
  };

  async init() {
    this.collection = this.container.get(this.config.collectionClass);
    this.initialFilters = Object.assign({}, this.config.body.$?.filters || {});
    this.load({
      count: true,
    });
  }

  load(loadOptions: LoadOptions = {}) {
    this.updateState({ isLoading: true });

    if (loadOptions.count) {
      this.count();
    }

    this.collection
      .find(
        {
          filters: {
            ...this.state.filters,
            ...this.initialFilters,
          },
          options: {
            ...this.state.options,
            ...this.getPaginationOptions(),
          },
        },
        this.config.body
      )
      .then((documents) => {
        this.updateState({
          isLoading: false,
          isError: false,
          documents,
        });
      })
      .catch((err) => {
        this.updateState({
          isLoading: false,
          isError: true,
          errorMessage: err.toString(),
        });
      });
  }

  /**
   * Performs count and updates the state
   */
  count() {
    this.updateState({
      isCountLoading: true,
    });
    this.collection
      .count({
        ...this.state.filters,
        ...this.initialFilters,
      })
      .then((count) => {
        this.updateState({
          isCountLoading: false,
          isCountError: false,
          totalCount: count,
        });
      })
      .catch((err) => {
        this.updateState({
          isCountLoading: false,
          isCountError: true,
          countErrorMessage: err.toString(),
        });
      });
  }

  setCurrentPage(page: number) {
    this.updateState({ currentPage: page });
    this.load();
  }

  extendFilters(filters: MongoFilterQuery<T>) {
    this.updateState({
      filters: {
        ...this.state.filters,
        ...filters,
        ...this.initialFilters,
      },
    });
    this.load({
      count: true,
    });
  }

  setFilters(filters: MongoFilterQuery<T>) {
    this.updateState({
      filters: {
        ...filters,
        ...this.initialFilters,
      },
    });
    this.load({
      count: true,
    });
  }

  updateSort(name: T extends null ? string : keyof T, order: 1 | -1) {
    this.updateState({
      options: {
        ...this.state.options,
        sort: {
          [name]: order,
        },
      },
    });
    this.load();
  }

  /**
   * Gets options for pagination if pagination exists
   */
  protected getPaginationOptions(): IQueryOptions<T> {
    const options: IQueryOptions = {};
    if (this.config.perPage > 0) {
      options.limit = this.config.perPage;
      options.skip = (this.state.currentPage - 1) * options.limit;
    }

    return options;
  }
}
