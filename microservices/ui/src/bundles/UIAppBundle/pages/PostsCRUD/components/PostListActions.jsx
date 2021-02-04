import React, { Fragment } from 'react';
import { Button, Modal, notification } from 'antd';
import { withRouter } from 'react-router';
import { withMolecule } from 'react-molecule';
import db from 'apollo-morpher';

const InsurancesListActions = ({ history, object, molecule }) => (
  <div>
    <Button onClick={() => history.push(`/insurances/${object._id}/edit`)}>Edit</Button>{' '}
    <Button
      type="danger"
      onClick={() => {
        Modal.confirm({
          title: 'Do you want to delete this item?',
          onOk() {
            db.insuranceCompanies
              .remove({
                _id: object._id,
              })
              .then(() => {
                molecule.getAgent('loader').load();
                notification.open({
                  message: 'The insurance company has been deleted',
                });
              })
              .catch(err => {
                let message = 'Something went wrong';
                if (err.message.indexOf('insuranceCompany-used') >= 0) {
                  message =
                    "This insurance company is used by some clinics. You can't delete it";
                }
                notification.error({
                  message,
                });
              });
          },
          onCancel() {},
        });
      }}
    >
      Delete
    </Button>
  </div>
);

export default withRouter(withMolecule(InsurancesListActions));
