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
        url: `/request`,
        method: "POST",
        body: requestsData
      }),
      invalidatesTags: ["requests"]
    }), 
    updateRequest: builder.mutation({
      query: ({id, statusData}: {id: string|undefined, statusData: {requestStatus: 'PENDING'|'ACCEPTED'|'REJECTED'}}) => ({
        url: `/request/${id}/update-status`,
        method: "PATCH",
        body: statusData
      }),
      invalidatesTags: ["requests"]
    }), 
  }),
});

export const { useAddRequestMutation, useGetMyRequestsQuery, useGetRequestsToMeQuery, useGetAllRequestsQuery, useUpdateRequestMutation } = requestsApi;
