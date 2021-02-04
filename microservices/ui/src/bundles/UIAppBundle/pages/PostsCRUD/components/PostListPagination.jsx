import React from 'react';
import { withMolecule } from 'react-molecule';
import { observer } from 'mobx-react';
import { Pagination } from 'antd';

class InsurancesListPagination extends React.Component {
  constructor(props) {
    super(props);

    const { agent, molecule } = this.props;
    this.pager = molecule.agents.pager;
  }

  onPageChange = ({ selected }) => {
    this.pager.changePage(selected);
  };

  render() {
    const { store } = this.pager;
    const { total, currentPage, perPage } = store;

    return (
      <Pagination
        defaultCurrent={currentPage}
        pageSize={perPage}
        onChange={page => {
          this.onPageChange({ selected: page - 1 });
        }}
        total={total}
      />
    );
  }
}

export default withMolecule(observer(InsurancesListPagination));
