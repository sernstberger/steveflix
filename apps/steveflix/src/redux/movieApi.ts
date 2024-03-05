import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.NX_REACT_APP_MOVIE_DB_API_KEY;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (id) => `movie/${id}?api_key=${apiKey}`,
    }),
  }),
});

export const { useGetMovieQuery } = movieApi;
