import { menu } from 'ui/layouts/MainLayout/MainMenu';
import RolesEnum from './../../enums/roles.enum.js';

menu.push({
  label: 'Insurances',
  icon: 'pie-chart',
  key: 'insurances',
  isPrivate: true,
  allowedRoles: [RolesEnum.ADMIN],
  items: [
    { icon: 'unordered-list', label: 'List', path: '/insurances/list' },
    { icon: 'plus', label: 'New', path: '/insurances/new' },
  ],
  isSelected: path => path.indexOf('/insurances') === 0,
});
