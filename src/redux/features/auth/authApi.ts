import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (data: {newPassword: string, oldPassword: string}) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"]
    }),   
  }),
});

export const { useChangePasswordMutation } = authApi;
