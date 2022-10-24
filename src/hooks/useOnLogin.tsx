import { useContext, useEffect } from "react";
import {
  CurrentUserContext,
  userContextActions,
} from "../context/currentUserContext";

import useLocalStorage from "./useLocalStorage";
import { apiUserType } from "../services/apiService/apiServiceTypes";

const useOnLogin = (response: { user: apiUserType } | null) => {
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
