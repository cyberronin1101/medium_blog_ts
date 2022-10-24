import { useContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  CurrentUserContext,
  userContextActions,
} from "../../context/currentUserContext";

import ApiService from "../../services/apiService/apiService";
import { useFetch } from "../../hooks/useFetch";

const CurrentUserChecker = ({ children }: { children: JSX.Element }) => {
  const [{ response }, getUser] = useFetch(ApiService.getUser);

  const [token] = useLocalStorage("token");

  const [, setUser] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) {
      setUser({ type: userContextActions.SET_UNAUTHORIZED });
      return;
    }

    getUser();
  }, [setUser, getUser, token]);

  useEffect(() => {
    if (!response) {
      return;
    }

    setUser({
      type: userContextActions.SET_AUTHORIZED,
      payload: response.user,
    });
  }, [response, setUser]);

  return children;
};

export default CurrentUserChecker;
