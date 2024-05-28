import { authKey } from '@/constants';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { deleteCookies } from './deleteCookies';
import toast from 'react-hot-toast';

export const logoutUser = (router: AppRouterInstance) => {
   localStorage.removeItem(authKey);
   deleteCookies([authKey, 'refreshToken']);
   toast.success("Logged out successfully!");
   router.push('/');
   router.refresh();
};