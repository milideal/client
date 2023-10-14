import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StoreNodes, storeSearchAPIProps } from "../types";

const storeSearchAPI = createApi({
  reducerPath: "storeSearch",
  baseQuery: fetchBaseQuery({ baseUrl: "https://milideal-api.run.goorm.io" }),
  endpoints: (builder) => ({
    searchStores: builder.query<StoreNodes, storeSearchAPIProps>({
      query: (props) => `/store?search=${props.searchQuery}`,
    }),
  }),
});

export default storeSearchAPI;

export const { useSearchStoresQuery } = storeSearchAPI;
