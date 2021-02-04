import React from 'react';
import { Select } from 'antd';
import { withMolecule } from 'react-molecule';

const Option = Select.Option;

const InsurancesPerPage = ({ molecule }) => {
  const perPages = [10, 20, 50, 100];
  const pager = molecule.agents.pager;

  return (
    <Select
      defaultValue={molecule.agents.pager.store.perPage}
      style={{ width: 120 }}
      onChange={v => pager.changePerPage(v)}
    >
      {perPages.map(perPage => (
        <Option value={perPage} key={perPage}>
          {perPage}
        </Option>
      ))}
    </Select>
  );
};

export default withMolecule(InsurancesPerPage);
