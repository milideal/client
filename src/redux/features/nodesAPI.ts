import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StoreNode, StoreNodes, filterType, nodesAPIProps } from "../types";

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
      queryFn: async (props, _api, _extraOptions, baseQuery) => {
        const selectedFilter = props.filter as filterType;
        const results = await Promise.all(
          Object.keys(selectedFilter)
            .filter((k) => selectedFilter[k])
            .map((key: string) =>
              baseQuery(
                `/geo?x=${props.x}&y=${props.y}&distance=${
                  levelMeter[props.level || 6] || 4000
                }&type=${key}`
              )
            )
        );

        const merged = ([] as StoreNode[]).concat(
          ...results.map(
            (result) => (result as { data: StoreNodes }).data.results
          )
        );

        const countSum = results.reduce(
          (prev, result) => prev + (result as { data: StoreNodes }).data.count,
          0
        );

        const totalResult: StoreNodes = {
          count: countSum,
          previous: null,
          next: null,
          results: merged,
        };

        return { data: totalResult };
      },
    }),
  }),
});

export default nodesAPI;

export const { useGetStoresQuery, useLazyGetStoresQuery } = nodesAPI;
