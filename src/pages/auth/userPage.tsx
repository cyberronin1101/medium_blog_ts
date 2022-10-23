import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../context/currentUserContext";
import { CurrentTitleContext } from "../../context/titleContext";

const Auth = () => {
  let [currentUser] = useContext(CurrentUserContext);
  let [token, setToken] = useLocalStorage("token");
  let { username } = useParams();

  let [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: username,
      description: "profile",
    });
  }, [setTitle, username]);

  console.log(currentUser);
  console.log(username);
  console.log(token);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <button onClick={() => setToken("")}>Logout</button>
    </div>
  );
};

export default Auth;
