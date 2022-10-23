import { Navigate, Route, Routes } from "react-router-dom";
// import ArticlePage from "../pages/ArticlePage";
import React from "react";
import TagArticlesPage from "../pages/articles/TagArticlesPage";
import UserPage from "../pages/auth/userPage";
import SignInPage from "../pages/auth/signInPage";
import SignUpPage from "../pages/auth/signUpPage";
import ArticlesPage from "../pages/articles/ArticlesPage";
import FeedArticlesPage from "../pages/articles/FeedArticlesPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/articles"} />} />

      <Route path={"/articles"} element={<ArticlesPage />}>
        <Route path={":page"} element={<ArticlesPage />} />
      </Route>

      <Route path={"feed"} element={<FeedArticlesPage />}>
        <Route path={":page"} element={<FeedArticlesPage />} />
      </Route>

      <Route path={"tags/:tag"} element={<TagArticlesPage />}>
        <Route path={":page"} element={<TagArticlesPage />} />
      </Route>

      <Route path={"profiles"}>
        <Route path={":username"} element={<UserPage />} />
      </Route>

      <Route path={"login"} element={<SignInPage />} />
      <Route path={"register"} element={<SignUpPage />} />
    </Routes>
  );
};

export default PageRoutes;
