import React, { Component } from 'react';
import { notification, Spin, Button } from 'antd';

import InsurancesForm from '../components/InsurancesForm';
import { findById, updateById } from './loaders';

class InsurancesEdit extends Component {
  state = {
    loading: true,
    item: null,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    findById(params._id)
      .then(item => {
        this.setState({
          loading: false,
          item,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error,
        });
      });
  }

  onSubmit = data => {
    const {
      history,
      match: { params },
    } = this.props;

    updateById(params._id, data)
      .then(item => {
        notification.open({
          message: 'Insurance Company has been edited',
        });

        history.push(`/insurances/list`);
      })
      .catch(error => {
        notification.open({
          message: 'There was an error updating the item',
        });
      });
  };

  render() {
    const { loading, error, item } = this.state;
    const { history } = this.props;

    if (error) {
      return null;
    }

    if (loading) {
      return <Spin />;
    }

    return (
      <div>
        <h1>Edit Insurance Company</h1>
        <div>
          <Button onClick={() => history.push(`/insurances/list`)}>Back to list</Button>
        </div>
        <InsurancesForm model={item} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default InsurancesEdit;
