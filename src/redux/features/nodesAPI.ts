import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StoreNodes, nodesAPIProps } from "../types";

const nodesAPI = createApi({
  reducerPath: "node",
  baseQuery: fetchBaseQuery({ baseUrl: "https://milideal-api.run.goorm.io" }),
  endpoints: (builder) => ({
    getStores: builder.query<StoreNodes, nodesAPIProps>({
      query: (props) =>
        `/geo?x=${props.x}&y=${props.y}&distance=${props.distance}`,
    }),
  }),
});

export default nodesAPI;

export const { useGetStoresQuery } = nodesAPI;
