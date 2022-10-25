import React, { SyntheticEvent, useContext, useEffect, useRef } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import { Link, Navigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import ErrorMessage from "../../components/helpers/errorMessage";
import BackendErrorMessages from "../../components/error/BackendErrorMessages";
import { CurrentUserContext } from "../../context/currentUserContext";
import useOnLogin from "../../hooks/useOnLogin";
import { useFetch } from "../../hooks/useFetch";
import apiService from "../../services/apiService/apiService";

const SignUpPage = () => {
  const usernameInput = useInput();
  const emailInput = useInput();
  const passwordInput = useInput();

  const [currentUser] = useContext(CurrentUserContext);

  const [{ response, loading, error }, auth] = useFetch(apiService.signUp);

  const inputRef = useRef<HTMLInputElement>(null);

  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "Sign Up",
    });
  }, [setTitle]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useOnLogin(response);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    auth({
      email: emailInput.value,
      password: passwordInput.value,
      username: usernameInput.value,
    });
  };

  if (currentUser.currentUser) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={"auth-page"}>
      <div className={"container page"}>
        <div className={"row"}>
          <div className={"col-md-6 offset-md-3 col-xs-12"}>
            <p className={"text-xs-center"}>
              <Link to={"/login"}>Have an account</Link>
            </p>

            {error &&
              (error?.response?.data.errors ? (
                <BackendErrorMessages errors={error.response.data.errors} />
              ) : (
                <ErrorMessage error={error} />
              ))}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className={"form-group"}>
                  <input
                    type="text"
                    className={"form-control form-control-lg"}
                    placeholder={"Login"}
                    ref={inputRef}
                    {...usernameInput.bind}
                  />
                </fieldset>
                <fieldset className={"form-group"}>
                  <input
                    type="text"
                    className={"form-control form-control-lg"}
                    placeholder={"Email"}
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
                disabled={loading}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
