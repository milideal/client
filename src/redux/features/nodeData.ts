import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StoreNode } from "../types";

export interface NodeData {
  selected: StoreNode | null;
}

export const initialState: NodeData = {
  selected: null,
};

const nodeData = createSlice({
  name: "nodeData",
  initialState,
  reducers: {
    setSelectedNode(state, action: PayloadAction<{ value: StoreNode | null }>) {
      state.selected = action.payload.value;
    },
  },
});

export default nodeData;

export const { setSelectedNode } = nodeData.actions;
