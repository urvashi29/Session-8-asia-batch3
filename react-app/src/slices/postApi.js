import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// we are creating api slice
export const postApi = createApi({
  // unique key
  reducerPath: "postApi",

  //fetchBaseQuery is doing what axios is doing for us
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // getAllPost is custom name, rest all property we have to keep same
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

console.log(postApi);

//we have to manually add "use" in beginning and "Query" in the end.
export const { useGetAllPostQuery, useGetPostByIdQuery } = postApi;
