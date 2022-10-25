import useInput from "../../hooks/useInput";
import React, { SyntheticEvent, useContext, useEffect, useRef } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";
import { CurrentTitleContext } from "../../context/titleContext";
import { Link, Navigate } from "react-router-dom";
import BackendErrorMessages from "../../components/error/BackendErrorMessages";
import ErrorMessage from "../../components/helpers/errorMessage";
import useOnLogin from "../../hooks/useOnLogin";
import { useFetch } from "../../hooks/useFetch";
import apiService from "../../services/apiService/apiService";

const SignInPage = () => {
  const emailInput = useInput();
  const passwordInput = useInput();

  const [currentUser] = useContext(CurrentUserContext);

  const [{ response, loading, error }, auth] = useFetch(apiService.signIn);

  const inputRef = useRef<HTMLInputElement>(null);

  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "Sign In",
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
              <Link to={"/login"}>Need an account</Link>
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
