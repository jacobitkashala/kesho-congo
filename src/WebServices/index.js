import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  resucerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`
    }),
    getUser: builder.query({
      query: () => `users/${1}`
    })
  })
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
