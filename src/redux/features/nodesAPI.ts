import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Nodes, nodesAPIProps } from "../types";

const nodesAPI = createApi({
  reducerPath: "node",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getStores: builder.query<Nodes, nodesAPIProps>({
      query: (props) =>
        `/geo?x=${props.x}&y=${props.y}&distance=${props.distance}`,
    }),
  }),
});

export default nodesAPI;

export const { useGetStoresQuery } = nodesAPI;
