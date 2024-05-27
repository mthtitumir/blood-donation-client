import { TUserProfile } from "@/types";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/user",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"]
    }),
    getAllUser: builder.query({
      query: (params) => ({
        url: "/user",
        method: "GET",
        params,
      }),
      providesTags: ["user"]
    }),
    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET"
      }),
      providesTags: ["user"]
    }),
    updateUser: builder.mutation({
      query: ({id, updatedUserData}: {id: string, updatedUserData: Partial<TUserProfile>}) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: updatedUserData,
      }),
      invalidatesTags: ["user"]
    }),
    deleteUser: builder.mutation({
      query: ({id}: {id: string}) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"]
    }),
  }),
});

export const { useCreateUserMutation, useGetAllUserQuery, useGetMeQuery, useUpdateUserMutation, useDeleteUserMutation } = userApi;
