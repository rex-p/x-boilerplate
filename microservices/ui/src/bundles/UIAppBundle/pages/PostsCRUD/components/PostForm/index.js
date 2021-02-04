import React from 'react';
import { AutoForm } from 'uniforms-antd';
import FormSchema from './schema';

const InsurancesForm = ({ onSubmit, model = {} }) => {
  return (
    <AutoForm schema={FormSchema} model={model} onSubmit={onSubmit} id="item-form" />
  );
};

export default InsurancesForm;
