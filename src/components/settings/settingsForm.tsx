import {
  apiBackendErrorsType,
  apiUserType,
} from "../../services/apiService/apiServiceTypes";
import useInput from "../../hooks/useInput";
import React, { FormEvent, useEffect, useRef } from "react";
import BackendErrorMessages from "../error/BackendErrorMessages";

const SettingsForm = ({
  onSubmit = () => {},
  errors,
  loading = false,
  initialValue = {
    image: "",
    bio: "",
    username: "",
    email: "",
    password: "",
  },
}: {
  onSubmit: (data: apiUserType) => void;
  errors?: apiBackendErrorsType;
  loading?: boolean;
  initialValue?: apiUserType;
}) => {
  const imgUrlInput = useInput(initialValue.image);
  const usernameInput = useInput(initialValue.username);
  const bioInput = useInput(initialValue.bio);
  const emailInput = useInput(initialValue.email);
  const passwordInput = useInput(initialValue.password);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      image: imgUrlInput.value,
      bio: bioInput.value,
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });
  };

  return (
    <div className={"row"}>
      <div className={"col-md-10"}>
        <BackendErrorMessages errors={errors} />

        <form onSubmit={onSubmitForm}>
          <fieldset className={"form-group"}>
            <input
              type="text"
              className={"form-control form-control-lg"}
              placeholder={"Url of profile picture"}
              ref={inputRef}
              {...imgUrlInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <input
              type="text"
              className={"form-control form-control-lg"}
              placeholder={"Username"}
              {...usernameInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <textarea
              className={"form-control form-control-lg"}
              placeholder={"Write Your bio (in markdown)"}
              rows={8}
              {...bioInput.bind}
            />
          </fieldset>

          <fieldset className={"form-group"}>
            <input
              className={"form-control form-control-lg"}
              placeholder={"Email"}
              {...emailInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <input
              className={"form-control form-control-lg"}
              placeholder={"Password"}
              {...passwordInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <button
              type={"submit"}
              className={"btn btn-lg pull-xs-right btn-primary"}
              disabled={loading}
            >
              Save
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SettingsForm;
