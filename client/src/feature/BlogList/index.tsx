import { useDispatch } from "react-redux";
import { useQueryParameter } from "../../common/customHooks/useQueryParameter";
import { useEffect } from "react";
import {
  fetchBlogList,
  selectBlogList,
  selectBlogListStatus,
} from "./blogListSlice";
import { BlogTile } from "./BlogTile";
import { useSelector } from "react-redux";
import { Container } from "./styled";
import { Loader } from "../../common/fetchStates/Loader";
import { Error } from "../../common/fetchStates/Error";
import { NoResult } from "../../common/fetchStates/NoResults";

export const BlogList = () => {
  const query = useQueryParameter("search");
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogList);
  const stateOfLoading = useSelector(selectBlogListStatus);

  useEffect(() => {
    dispatch(fetchBlogList(query));
  }, [dispatch, query]);

  switch (stateOfLoading) {
    case "loading":
      return <Loader />;
    case "success": {
      return blogs.length === 0 ? (
        <NoResult />
      ) : (
        <Container>
          {blogs.map(({ id, title, body }) => (
            <BlogTile key={id} title={title} body={body} />
          ))}
        </Container>
      );
    }
    case "error":
      return <Error />;
    default:
      return null;
  }
};
