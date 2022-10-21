import { Route, Routes } from "react-router-dom";
import GlobalFeedPage from "../pages/GlobalFeedPage";
import ArticlePage from "../pages/ArticlePage";
import React from "react";
import Auth from "../pages/auth/Auth";
import TagFeedPage from "../pages/tags/TagFeedPage";

export default () => {
  return (
    <Routes>
      <Route index element={<GlobalFeedPage />} />

      {/*<Route path={"tags"} element={null}>*/}
      <Route path={"tags/:slug"} element={<TagFeedPage />} />
      {/*</Route>*/}

      <Route path={"article"}>
        <Route index element={<ArticlePage />} />
        <Route path={":articleId"} element={<ArticlePage />} />
      </Route>

      <Route path={"login"} element={<Auth />} />
      <Route path={"register"} element={<Auth />} />
    </Routes>
  );
};
