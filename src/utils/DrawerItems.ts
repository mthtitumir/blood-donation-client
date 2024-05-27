import { DrawerItem, UserRole } from '@/types';

import { Role } from '@/constants';
import { Icons } from '@/icons';

export const DrawerItems = (role: UserRole): DrawerItem[] => {
   const roleMenus: DrawerItem[] = [];

   const defaultMenus = [
      {
         title: 'Profile',
         path: `profile`,
         icon: Icons.Profile,
      },
      {
         title: 'My Blood Requests',
         path: `my-requests`,
         icon: Icons.BloodFill,
      },
      {
         title: 'Requests To Me',
         path: `requests-to-me`,
         icon: Icons.DonateBlood,
      },
      {
         title: 'Change Password',
         path: `change-password`,
         icon: Icons.Password,
      },
   ];   

   switch (role) {
      case Role.SUPER_ADMIN:
         roleMenus.push(
            {
               title: 'All Blood Requests',
               path: `all-requests`,
               icon: Icons.DropDouble,
            },
            {
               title: 'Manage Users',
               path: `manage-users`,
               icon: Icons.Users,
            }
         );
         break;

      case Role.ADMIN:
         roleMenus.push(
            {
               title: 'All Blood Requests',
               path: `all-requests`,
               icon: Icons.DropDouble,
            },
            {
               title: 'Manage Users',
               path: `manage-users`,
               icon: Icons.Users,
            }
         );
         break;

      case Role.MODERATOR:
         roleMenus.push(
            {
               title: 'All Blood Requests',
               path: `all-requests`,
               icon: Icons.DropDouble,
            },
         );
         break;
      default:
         break;
   }

   return [...defaultMenus, ...roleMenus];
};