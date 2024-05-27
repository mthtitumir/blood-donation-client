import { authKey } from '@/constants';
// import { instance as axiosInstance } from '@/helpers/axios/axiosInstance';
import { verifyToken } from '@/utils/jwt';

import {
    getFromLocalStorage,
    removeFromLocalStorage,
    setToLocalStorage,
} from '@/utils/LocalStorage';

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);
    //   console.log(authToken);
    if (authToken) {
        const decodedData: any = verifyToken(authToken);
        return {
            ...decodedData,
            role: decodedData?.role,
        };
    } else {
        return '';
    }
};

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        return !!authToken;
    }
};

export const removeUser = () => {
    return removeFromLocalStorage(authKey);
};

// export const getNewAccessToken = async () => {
//     return await axiosInstance({
//         url: 'http://localhost:3010/api/v1/auth/refresh-token',
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true,
//     });
// };