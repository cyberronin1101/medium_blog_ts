import { useContext, useEffect } from "react";
import {
  CurrentUserContext,
  userContextActions,
} from "../context/currentUserContext";
import { userType } from "../types/apiTypes";
import useLocalStorage from "./useLocalStorage";

const useOnLogin = (response: { user: userType } | null) => {
  const [, setCurrentUser] = useContext(CurrentUserContext);
  const [, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (!response) {
      return () => {};
    }

    const user = response.user;

    user.token && setToken(user.token);
    setCurrentUser({ type: userContextActions.SET_AUTHORIZED, payload: user });
  }, [response, setCurrentUser, setToken]);
};

export default useOnLogin;
