import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchBlogList,
  fetchBlogListError,
  fetchBlogListSuccess,
} from "./blogListSlice";
import { getBlogsFromApi } from "./getBlogsFromApi";
import { ApiResponse, ListPayload } from "../../interfaces/generalInterfaces";
import { baseUrl } from "../../apiValues";

function* fetchBlogListHandler({ payload: query }: ListPayload) {
  const params = {
    query,
  };

  const fullUrl = !params.query
    ? baseUrl
    : `${baseUrl}?${new URLSearchParams(params)}`;

  yield delay(300);

  try {
    const blog: ApiResponse = yield call(getBlogsFromApi<ApiResponse>, fullUrl);
    yield put(fetchBlogListSuccess(blog));
  } catch (error) {
    yield put(fetchBlogListError());
  }
}

export function* watchFetchBlogList() {
  yield takeEvery(fetchBlogList, fetchBlogListHandler);
}
