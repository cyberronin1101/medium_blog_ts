import useFetch from "../../hooks/useFetch";
import { useContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../context/currentUser";

const CurrentUserChecker = ({ children }) => {
  let [{ response }, auth] = useFetch("/user");
  let [token] = useLocalStorage("token");
  let [, setUser] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) {
      setUser((state) => ({
        ...state,
        isLoggedIn: false,
      }));
      return;
    }
    auth();
  }, [setUser]);

  useEffect(() => {
    if (!response) {
      return;
    }

    setUser((state) => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response, setUser]);

  return children;
};

export default CurrentUserChecker;
