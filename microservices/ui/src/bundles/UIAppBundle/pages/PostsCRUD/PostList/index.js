import React, { Component } from 'react';
import { Button, Table, Row, Col, Input } from 'antd';

import { Molecule } from 'react-molecule';
import { EasyList, EasyLoaderAgent, EasyPagerAgent } from 'easify';

import InsurancesListPagination from '../components/InsurancesListPagination.jsx';
import InsurancesListPerPage from '../components/InsurancesListPerPage.jsx';

import { load, count } from './loaders';
import columns from './columns';

const Search = Input.Search;

class PatientsList extends Component {
  onSearch = value => {
    const { loader } = this.props.molecule.agents;

    loader.update({
      filters: {
        companyName: {
          $regex: value,
          $options: 'i',
        },
      },
    });
  };

  onTableChange = (filters, pagination, sorter) => {
    const { loader } = this.props.molecule.agents;

    loader.update({
      options: {
        sort: {
          [sorter.field]: sorter.order === 'descend' ? -1 : 1,
        },
      },
    });
  };

  reload = () => {
    const { loader } = this.props.molecule.agents;
    loader.load();
  };

  render() {
    const { history } = this.props;

    return (
      <div>
        <Row gutter={16}>
          <Col span={24}>
            <h1>Insurances List</h1>

            <div style={{ marginBottom: 10 }}>
              <Button onClick={this.reload} icon="reload">
                Reload
              </Button>
              &nbsp;
              <Button onClick={() => history.push(`/insurances/new`)} icon="plus">
                Add Insurance Companies
              </Button>
            </div>

            <div>
              <Search
                placeholder="Type here to search ..."
                onSearch={this.onSearch}
                enterButton
                allowClear
              />
            </div>
            <br />
            <EasyList>
              {({ data, loading, molecule }) => (
                <Table
                  dataSource={data}
                  columns={columns}
                  loading={loading}
                  pagination={false}
                  onChange={this.onTableChange}
                  rowKey={item => item._id}
                />
              )}
            </EasyList>
            <br />
            <Row gutter={16}>
              <Col span={12}>
                <InsurancesListPagination />
              </Col>
              <Col span={12}>
                <div style={{ float: 'right' }}>
                  <InsurancesListPerPage />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ({ history }) => (
  <Molecule
    agents={{
      loader: EasyLoaderAgent.factory({ load }),
      pager: EasyPagerAgent.factory({ count, perPage: 20 }),
    }}
  >
    <PatientsList history={history} />
  </Molecule>
);
