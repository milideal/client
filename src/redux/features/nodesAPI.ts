import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StoreNodes, nodesAPIProps } from "../types";

const levelMeter: { [key: number]: number } = {
  6: 4000,
  5: 2000,
  4: 500,
  3: 300,
  2: 180,
  1: 100,
};

const nodesAPI = createApi({
  reducerPath: "node",
  baseQuery: fetchBaseQuery({ baseUrl: "https://milideal-api.run.goorm.io" }),
  endpoints: (builder) => ({
    getStores: builder.query<StoreNodes, nodesAPIProps>({
      query: (props) =>
        `/geo?x=${props.x}&y=${props.y}&distance=${
          levelMeter[props.level || 6] || 4000
        }`,
    }),
  }),
});

export default nodesAPI;

export const { useGetStoresQuery } = nodesAPI;
