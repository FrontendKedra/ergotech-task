import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import blogListReducer from "./feature/BlogList/blogListSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    blogList: blogListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
