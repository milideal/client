import logger from "redux-logger";
import { reduxBatch } from "@manaflair/redux-batch";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nodesAPI from "./features/nodesAPI";
import searchSlice from "./features/searchSlice";

const rootReducer = combineReducers({
  [nodesAPI.reducerPath]: nodesAPI.reducer,
  search: searchSlice.reducer,
});

const store = import.meta.env.DEV
  ? configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger).concat(nodesAPI.middleware),
      enhancers: [reduxBatch],
    })
  : configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nodesAPI.middleware),
      enhancers: [reduxBatch],
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
