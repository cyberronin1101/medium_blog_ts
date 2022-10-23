import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  CurrentUserContext,
  userContextActions,
} from "../../context/currentUserContext";
import { CurrentTitleContext } from "../../context/titleContext";

const Auth = () => {
  const [, dispatchCurrentUser] = useContext(CurrentUserContext);
  const [token, setToken] = useLocalStorage("token");
  const { username } = useParams();

  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: username,
      description: "profile",
    });
  }, [setTitle, username]);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <button
        onClick={() => {
          // setCurrentUser({
          //   isLogin: false,
          //   isLoggedIn: false,
          //   currentUser: null,
          // });

          dispatchCurrentUser({ type: userContextActions.SET_UNAUTHORIZED });
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Auth;
