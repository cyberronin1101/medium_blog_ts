import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import TopBar from "./components/header/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/currentUser";
import CurrentUserChecker from "./components/user/currentUserChecker";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
