import useFetch from "../../hooks/useFetch";
import { useContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  CurrentUserContext,
  userContextActions,
} from "../../context/currentUserContext";
import apiService from "../../services/apiService";
import { userType } from "../../types/apiTypes";

const CurrentUserChecker = ({ children }: { children: JSX.Element }) => {
  let [{ response }, getUser] = useFetch<{ user: userType }>(
    apiService.getUser
  );

  let [token] = useLocalStorage("token");

  let [, setUser] = useContext(CurrentUserContext);

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
