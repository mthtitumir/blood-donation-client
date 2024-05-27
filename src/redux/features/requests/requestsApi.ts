import { baseApi } from "../../api/baseApi";

const requestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRequests: builder.query({
      query: (params) => ({
        url: "/request",
        method: "GET",
        params,
      }),
      providesTags: ["requests"]
    }),
    getMyRequests: builder.query({
      query: () => ({
        url: "/request/my-requests",
        method: "GET"
      }),
      providesTags: ["requests"]
    }),
    getRequestsToMe: builder.query({
      query: () => ({
        url: "/request/requests-to-me",
        method: "GET",
      }),
      providesTags: ["requests"]
    }),
    addRequest: builder.mutation({
      query: (requestsData) => ({
        url: `/requests`,
        method: "POST",
        body: requestsData
      }),
      invalidatesTags: ["requests"]
    }), 
  }),
});

export const { useAddRequestMutation, useGetMyRequestsQuery, useGetRequestsToMeQuery, useGetAllRequestsQuery } = requestsApi;
