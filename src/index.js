import React from "react";
import ReactDOM from "react-dom/client";
import TopBar from "./components/header/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import CurrentUserChecker from "./components/user/currentUserChecker";
import RootProvider from "./context/rootProvider";
import TopBanner from "./components/header/TopBanner";
import Main from "./components/page/main";
import PageRoutes from "./routes/pageRoutes";

const App = () => {
  return (
    <RootProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />

          <div className={"home-page"}>
            <TopBanner />
            <Main>
              <PageRoutes />
            </Main>
          </div>
        </Router>
      </CurrentUserChecker>
    </RootProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
