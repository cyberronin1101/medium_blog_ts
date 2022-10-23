import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import TopBar from "./components/header/TopBar";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import CurrentUserChecker from "./components/user/currentUserChecker";
import RootProvider from "./context/rootProvider";
import TopBanner from "./components/header/TopBanner";
import Main from "./components/page/main";
import PageRoutes from "./routes/pageRoutes";

// КОСТЫЛИ!!!
const Wrapper = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();

  const isArticle = pathname.includes("/article/");
  return (
    <div className={isArticle ? "article-page" : "home-page"}>{children}</div>
  );
};

const App = () => {
  return (
    <RootProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />

          <Wrapper>
            <TopBanner />

            <Main>
              <PageRoutes />
            </Main>
          </Wrapper>
        </Router>
      </CurrentUserChecker>
    </RootProvider>
  );
};

const root = document.getElementById("root");
root && ReactDOM.createRoot(root).render(<App />);
