import db from 'apollo-morpher';

export function load({ filters, options }) {
  return db.insuranceCompanies.find(
    {
      _id: 1,
      companyName: 1,
      plans: {
        name: 1,
      },
    },
    {
      filters,
      options,
    },
    {
      fetchPolicy: 'network-only',
    }
  );
}

export function count(filters) {
  return db.insuranceCompanies.count({
    filters,
    options: {},
  });
}
