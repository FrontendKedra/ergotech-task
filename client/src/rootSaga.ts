import { all } from "redux-saga/effects";
import { watchFetchBlogList } from "./feature/BlogList/blogListSaga";

export default function* rootSaga() {
  yield all([watchFetchBlogList()]);
}
