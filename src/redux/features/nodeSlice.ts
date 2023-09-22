import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Node {
  url: string; // "http://milideal-api.run.goorm.io/store/seogwipo-hotel-jeju";
  slug: string; // "seogwipo-hotel-jeju";
  address: string; // "제주도 서귀포시 상예로 319";
  name: string; //"seogwipo-hotel-jeju";
  coord: {
    x: number; //126.394649837226;
    y: number; //33.2731320756409;
  };
  storeType: string; // "Accom";
  imageSrc?: string;
  target: string;
  promotion?: string;
  tel?: string;
  facilities?: string;
  homepage?: string;
  endDate: null;
}

export interface Nodes {
  lastUpdated: string;
  count: number;
  next: null;
  previous: null;
  results: Node[];
}

const initialState: Nodes = {
  lastUpdated: "2023.01.01",
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const userListSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(nodesAPI.fulfilled, (_state, { payload }) => {
      return { ...payload };
    });
  },
});

export default userListSlice;

export const nodesAPI = createAsyncThunk("NODES_API", async () => {
  const response = await axios.get(`/store`);
  return response.data;
});
