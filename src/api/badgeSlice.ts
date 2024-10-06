import { apiSlice } from "./apiSlice";

export const badgesSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBadges: builder.query<any, void>({
            query: () => '/badges',
        })
    })
})

export const {useGetBadgesQuery} = badgesSlice;