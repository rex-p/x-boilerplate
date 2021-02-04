import React, { Fragment } from 'react';
import { Tag } from 'antd';
import InsurancesListActions from '../components/InsurancesListActions';

export default [
  {
    title: 'Company Name',
    key: 'name',
    dataIndex: 'companyName',
    sorter: function(a, b) {
      return a.companyName.localeCompare(b.companyName);
    },
  },
  {
    title: 'Insurance Plans',
    key: 'insurance plans',
    dataIndex: 'plans',
    render(plans, record) {
      plans = plans.map((plan, index) => (
        <Tag key={index} style={{ marginRight: '5px' }}>
          {plan.name}
        </Tag>
      ));
      return <Fragment>{plans}</Fragment>;
      // return plans.join('  ');
    },
  },
  {
    title: 'Actions',
    key: 'action',
    render(text, record) {
      return <InsurancesListActions object={record} />;
    },
  },
];
