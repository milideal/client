import logger from "redux-logger";
import { reduxBatch } from "@manaflair/redux-batch";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nodeSlice from "./features/nodeSlice";

const rootReducer = combineReducers({
  node: nodeSlice.reducer,
});

const store = import.meta.env.DEV
  ? configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
      enhancers: [reduxBatch],
    })
  : configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      enhancers: [reduxBatch],
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
