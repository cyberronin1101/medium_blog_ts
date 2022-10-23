import { Route, Routes } from "react-router-dom";
import GlobalFeedPage from "../pages/GlobalFeedPage";
// import ArticlePage from "../pages/ArticlePage";
import React from "react";
import TagFeedPage from "../pages/tags/TagFeedPage";
import UserPage from "../pages/auth/userPage";
import SignInPage from "../pages/auth/signInPage";
import SignUpPage from "../pages/auth/signUpPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<GlobalFeedPage />} />

      <Route path={"tags/:tag"} element={<TagFeedPage />}>
        <Route path={":page"} element={<TagFeedPage />} />
      </Route>

      {/*<Route path={"article"}>*/}
      {/*  <Route index element={<ArticlePage />} />*/}
      {/*  <Route path={":articleId"} element={<ArticlePage />} />*/}
      {/*</Route>*/}

      <Route path={"profiles"}>
        <Route path={":username"} element={<UserPage />} />
      </Route>

      <Route path={"login"} element={<SignInPage />} />
      <Route path={"register"} element={<SignUpPage />} />
    </Routes>
  );
};

export default PageRoutes;
