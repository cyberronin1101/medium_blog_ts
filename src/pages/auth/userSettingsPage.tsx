import React, { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";
import SettingsForm from "../../components/settings/settingsForm";
import BackendErrorMessages from "../../components/error/BackendErrorMessages";
import ErrorMessage from "../../components/helpers/errorMessage";
import {
  CurrentUserContext,
  userContextActions,
} from "../../context/currentUserContext";
import { useFetch } from "../../hooks/useFetch";
import apiService from "../../services/apiService/apiService";
import Loading from "../../components/helpers/loading";

const UserSettingsPage = () => {
  const [, setTitle] = useContext(CurrentTitleContext);
  const [, setCurrentUser] = useContext(CurrentUserContext);

  const [{ response, loading, error }, getUser] = useFetch(apiService.getUser);
  const [
    {
      response: responseUserSave,
      loading: loadingUserSave,
      error: errorUserSave,
    },
    userSave,
  ] = useFetch(apiService.userSave);

  useEffect(() => {
    if (!responseUserSave) {
      return;
    }
    setCurrentUser({
      type: userContextActions.SET_AUTHORIZED,
      payload: responseUserSave.user,
    });
  }, [responseUserSave, setCurrentUser]);

  useEffect(() => {
    setTitle({
      title: "You settings",
    });
  }, [setTitle]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={"container page"}>
        <div className={"row"}>
          <div className={"col-xs-12"}>
            {error &&
              (error?.response?.data.errors ? (
                <BackendErrorMessages errors={error.response.data.errors} />
              ) : (
                <ErrorMessage error={error} />
              ))}
            {response && (
              <SettingsForm
                onSubmit={(data) => userSave(data)}
                loading={loadingUserSave}
                errors={errorUserSave?.response?.data.errors}
                initialValue={response.user}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
