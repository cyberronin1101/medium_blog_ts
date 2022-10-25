import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import TagArticlesPage from "../pages/articles/TagArticlesPage";
import UserPage from "../pages/auth/userPage";
import SignInPage from "../pages/auth/signInPage";
import SignUpPage from "../pages/auth/signUpPage";
import ArticlesPage from "../pages/articles/ArticlesPage";
import FeedArticlesPage from "../pages/articles/FeedArticlesPage";
import ArticlePage from "../pages/articles/ArticlePage";
import NewArticlePage from "../pages/articles/NewArticlePage";
import ProtectedRoute from "./protectedRoute";
import EditArticlePage from "../pages/articles/EditArticlePage";
import UserSettingsPage from "../pages/auth/userSettingsPage";
import Error404 from "../pages/Error404";

const PageRoutes = () => {
  const redirectToLogin = "/login";

  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/articles"} />} />

      <Route path={"/articles"} element={<ArticlesPage />}>
        <Route path={":page"} element={<ArticlesPage />} />
      </Route>

      <Route path={"/article"}>
        <Route element={<ProtectedRoute redirect={redirectToLogin} />}>
          <Route path={"new"} element={<NewArticlePage />} />
        </Route>

        <Route path={":slug"}>
          <Route index element={<ArticlePage />} />
          <Route element={<ProtectedRoute redirect={redirectToLogin} />}>
            <Route path={"edit"} element={<EditArticlePage />} />
          </Route>
        </Route>
      </Route>

      <Route element={<ProtectedRoute redirect={redirectToLogin} />}>
        <Route path={"feed"} element={<FeedArticlesPage />}>
          <Route path={":page"} element={<FeedArticlesPage />} />
        </Route>
      </Route>

      <Route path={"tags/:tag"} element={<TagArticlesPage />}>
        <Route path={":page"} element={<TagArticlesPage />} />
      </Route>

      <Route path={"profiles"}>
        <Route path={":username"} element={<UserPage />} />
      </Route>

      <Route element={<ProtectedRoute redirect={redirectToLogin} />}>
        <Route path={"settings"} element={<UserSettingsPage />} />
      </Route>

      <Route path={"login"} element={<SignInPage />} />
      <Route path={"register"} element={<SignUpPage />} />

      <Route path={"*"} element={<Error404 />} />
    </Routes>
  );
};

export default PageRoutes;
