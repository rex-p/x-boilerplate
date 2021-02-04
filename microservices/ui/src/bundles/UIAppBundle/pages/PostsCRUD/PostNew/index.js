import React, { Component } from 'react';
import db from 'apollo-morpher';
import { notification, Button } from 'antd';

import InsurancesForm from '../components/InsurancesForm';

export default class InsurancesNew extends Component {
  onSubmit = data => {
    const { history } = this.props;

    db.insuranceCompanies
      .insert(data)
      .then(response => {
        notification.open({
          message: 'Insurace Company successfully added',
        });

        history.push(`/insurances/list`);
      })
      .catch(err => {
        console.log(err);
        notification.open({
          message: 'Something gone wrong.',
        });
      });
  };

  render() {
    const { history } = this.props;

    return (
      <div>
        <div>
          <Button onClick={() => history.push(`/insurances/list`)}>Back to list</Button>
        </div>
        <h1>New Insurance Company</h1>
        <InsurancesForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
