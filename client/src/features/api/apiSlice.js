import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        { baseUrl: 'http://localhost:5000/' }
    ),
    tagTypes: ["videos"],
    endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `/videos`,
      keepUnusedDataFor: 600,
      providesTags: ["videos"]
    }),
  }),
})

export const {useGetVideosQuery} = apiSlice;