/**
 * Here we need to create a common API slice for feature wise.
 * Suppose we have post, user, comment and its going to fetch data from different server
 * https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics
 * https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#injecting-endpoints
 * We can create custom fetch base query
 * https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-queries-with-basequery
 * 
 */

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: builder => ({
        //builder.query takes two types query<ResultType, ArgumentType>
        getIcons: builder.query<any, void>({
            query: () => '/icons',
        })
    })
})

export const {useGetIconsQuery} = apiSlice;