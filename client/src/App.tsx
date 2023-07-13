import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { BlogList } from "./feature/BlogList";
import { SearchBlog } from "./feature/SearchBlog";

function App() {
  return (
    <HashRouter>
      <SearchBlog />
      <Switch>
        <Route path="/blog">
          <BlogList />
        </Route>
        <Route path="/">
          <Redirect to="/blog" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
