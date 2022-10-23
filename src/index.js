import React from "react";
import ReactDOM from "react-dom/client";
import TopBar from "./components/header/TopBar";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import CurrentUserChecker from "./components/user/currentUserChecker";
import RootProvider from "./context/rootProvider";
import TopBanner from "./components/header/TopBanner";
import Main from "./components/page/main";
import PageRoutes from "./routes/pageRoutes";

// КОСТЫЛИ!!!
const Wrapper = ({ children }) => {
  let { pathname } = useLocation();

  let isArticle = pathname.includes("/article/");
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
