import { Link, Navigate, useLocation } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useContext, useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../context/currentUser";
import BackendErrorMessages from "../../components/error/BackendErrorMessages";

const Auth = () => {
  let { pathname } = useLocation();
  let usernameInput = useInput();
  let emailInput = useInput();
  let passwordInput = useInput();
  let isLogin = pathname === "/login";
  let apiUrl = isLogin ? "/users/login" : "/users";
  let [{ response, isLoading, error }, auth] = useFetch(apiUrl);
  let [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  let emailRef = useRef(null);
  let [token, setToken] = useLocalStorage("token");

  let pageTitle = isLogin ? "Sign In" : "Sign Up";
  let descriptionLink = isLogin ? "/register" : "/login";
  let descriptionText = isLogin ? "Need an account?" : "Have an account";

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!response) {
      return () => {};
    }

    setToken(response.user.token);
    setCurrentUser(response.user);
  }, [response, setToken, setCurrentUser]);

  let handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    if (!isLogin) {
      user.username = usernameInput.value;
    }

    auth({ method: "post", data: { user } });
  };

  if (token) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={"auth-page"}>
      <div className={"container page"}>
        <div className={"row"}>
          <div className={"col-md-6 offset-md-3 col-xs-12"}>
            <h2 className={"text-xs-center"}>{pageTitle}</h2>
            <p className={"text-xs-center"}>
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              {error && <BackendErrorMessages backendErrors={error.errors} />}

              <fieldset>
                {!isLogin && (
                  <fieldset className={"form-group"}>
                    <input
                      type="text"
                      className={"form-control form-control-lg"}
                      placeholder={"Login"}
                      ref={emailRef}
                      {...usernameInput.bind}
                    />
                  </fieldset>
                )}
                <fieldset className={"form-group"}>
                  <input
                    type="text"
                    className={"form-control form-control-lg"}
                    placeholder={"Email"}
                    ref={emailRef}
                    {...emailInput.bind}
                  />
                </fieldset>
                <fieldset className={"form-group"}>
                  <input
                    type="password"
                    className={"form-control form-control-lg"}
                    placeholder={"Password"}
                    {...passwordInput.bind}
                  />
                </fieldset>
              </fieldset>
              <button
                className={"btn btn-lg btn-primary pull-xs-right"}
                type={"submit"}
                disabled={isLoading}
              >
                {pageTitle}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
