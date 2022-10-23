import useInput from "../../hooks/useInput";
import React, { SyntheticEvent, useContext, useEffect, useRef } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";
import useFetch from "../../hooks/useFetch";
import { userType } from "../../types/apiTypes";
import apiService from "../../services/apiService";
import { CurrentTitleContext } from "../../context/titleContext";
import { Link, Navigate } from "react-router-dom";
import BackendErrorMessages from "../../components/error/BackendErrorMessages";
import ErrorMessage from "../../components/helpers/errorMessage";
import useOnLogin from "../../hooks/useOnLogin";

const SignInPage = () => {
  let emailInput = useInput();
  let passwordInput = useInput();

  let [currentUser] = useContext(CurrentUserContext);

  let [{ response, loading, error }, auth] = useFetch<{ user: userType }>(
    apiService.signIn
  );

  let inputRef = useRef<HTMLInputElement>(null);

  let [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "Sign In",
    });
  }, [setTitle]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useOnLogin(response);

  let handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    let user = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    auth({ data: { user } });
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
              <Link to={"/login"}>Need an account</Link>
            </p>

            {error &&
              (error?.response?.data ? (
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
                    placeholder={"Email"}
                    ref={inputRef}
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
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
