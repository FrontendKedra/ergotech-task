import { createSlice } from "@reduxjs/toolkit";
import { BlogListState } from "../../interfaces/generalInterfaces";
import { RootState } from "../../store";

const initialState: BlogListState = {
  status: "initial",
  blog: [],
};

const blogListSlice = createSlice({
  name: "blogList",
  initialState,
  reducers: {
    fetchBlogList: (state, { payload }) => {
      state.status = "loading";
    },
    fetchBlogListSuccess: (state, { payload: blog }) => {
      state.status = "success";
      state.blog = blog;
    },
    fetchBlogListError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchBlogList, fetchBlogListSuccess, fetchBlogListError } =
  blogListSlice.actions;

export const selectBlogListState = (state: RootState) => state.blogList;

export const selectBlogListStatus = (state: RootState) =>
  selectBlogListState(state).status;

export const selectBlogList = (state: RootState) =>
  selectBlogListState(state).blog;

export default blogListSlice.reducer;
