import { DrawerItem, UserRole } from '@/types';

import { Role } from '@/constants';
import { Icons } from '@/icons';

export const DrawerItems = (role: UserRole): DrawerItem[] => {
   const roleMenus: DrawerItem[] = [];

   const defaultMenus = [
      {
         title: 'Profile',
         path: `${role}/profile`,
         icon: Icons.DonateBlood,
      },
      {
         title: 'Change Password',
         path: `change-password`,
         icon: Icons.DonateBlood,
      },
   ];

   switch (role) {
      case Role.SUPER_ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Manage Users',
               path: `${role}/manage-users`,
               icon: Icons.DonateBlood,
            }
         );
         break;

      case Role.ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Specialties',
               path: `${role}/specialties`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Doctors',
               path: `${role}/doctors`,
               icon: Icons.DonateBlood,
            },
         );
         break;

      case Role.MODERATOR:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Schedules',
               path: `${role}/schedules`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Appointments',
               path: `${role}/appointment`,
               icon: Icons.DonateBlood,
            }
         );
         break;

      case Role.USER:
         roleMenus.push(
            {
               title: 'Appointments',
               path: `${role}/appointments`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Prescriptions',
               path: `${role}/prescriptions`,
               icon: Icons.DonateBlood,
            },
            {
               title: 'Payment History',
               path: `${role}/payment-history`,
               icon: Icons.DonateBlood,
            }
         );
         break;

      default:
         break;
   }

   return [...roleMenus, ...defaultMenus];
};