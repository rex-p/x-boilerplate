import routes from 'ui/routes';
import InsurancesList from './InsurancesList';
import InsurancesNew from './InsurancesNew';
import InsurancesEdit from './InsurancesEdit';

import './menu';
import RolesEnum from './../../enums/roles.enum.js';

routes.push(
  ...[
    {
      path: '/insurances/list',
      component: InsurancesList,
      isPrivate: true,
      allowedRoles: [RolesEnum.ADMIN],
    },
    {
      path: '/insurances/new',
      component: InsurancesNew,
      isPrivate: true,
      allowedRoles: [RolesEnum.ADMIN],
    },
    {
      path: `/insurances/:_id/edit`,
      component: InsurancesEdit,
      isPrivate: true,
      allowedRoles: [RolesEnum.ADMIN],
    },
  ]
);
