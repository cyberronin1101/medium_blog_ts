import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../context/currentUserContext";
import { userType } from "../types/apiTypes";
import useLocalStorage from "./useLocalStorage";

const useOnLogin = (response: { user: userType } | null) => {
  let [, setCurrentUser] = useContext(CurrentUserContext);
  let [, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (!response) {
      return () => {};
    }

    let user = response.user;

    user.token && setToken(user.token);
    setCurrentUser({ isLogin: false, isLoggedIn: true, currentUser: user });
  }, [response, setCurrentUser, setToken]);
};

export default useOnLogin;
