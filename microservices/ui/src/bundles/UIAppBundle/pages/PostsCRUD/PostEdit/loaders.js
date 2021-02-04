import db from 'apollo-morpher';

export const findById = function(_id) {
  return db.insuranceCompanies.findOne(
    {
      _id: 1,
      companyName: 1,
      plans: {
        name: 1,
      },
    },
    {
      filters: {
        _id,
      },
    },
    {
      fetchPolicy: 'network-only',
    }
  );
};

export const updateById = function(_id, data) {
  return db.insuranceCompanies.update(
    {
      _id: _id,
    },
    {
      $set: data,
    }
  );
};
