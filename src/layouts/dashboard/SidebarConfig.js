import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import personFill from '@iconify/icons-eva/person-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Reporting',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Patients',
    path: '/dashboard/patient',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Personnels',
    path: '/dashboard/personnel',
    icon: getIcon(personFill)
  }
];

export default sidebarConfig;
