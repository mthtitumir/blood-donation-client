import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "@/utils/LocalStorage";
import { authKey } from "@/constants";

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const token = getFromLocalStorage(authKey);
        if (token) {
            headers.set("Authorization", `${token}`);
        }
        return headers;
    }
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    tagTypes: ["user", "requests"],
    endpoints: () => ({})
})