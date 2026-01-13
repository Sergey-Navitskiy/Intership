import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // уникальный ключ для хранилища Redux
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getFields: builder.query({
      query: () => "products/category/groceries",
    }),
    // Для детальной страницы
    getFieldById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    login: builder.mutation({
      //Авторизация
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useGetFieldsQuery, useGetFieldByIdQuery, useLoginMutation } =
  apiSlice;
