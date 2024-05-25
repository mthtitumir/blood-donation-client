import { baseApi } from "../../api/baseApi";

const requestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRequests: builder.query({
      query: (params) => ({
        url: "/requests",
        method: "GET",
        params,
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

export const { useAddRequestMutation, useGetAllRequestsQuery } = requestsApi;
