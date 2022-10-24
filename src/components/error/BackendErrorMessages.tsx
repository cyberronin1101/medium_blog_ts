import { apiBackendErrorsType } from "../../services/apiService/apiServiceTypes";

const BackendErrorMessages = ({ errors }: apiBackendErrorsType) => {
  return (
    <ul className={"error-messages"}>
      {Object.keys(errors).map((name, idx) => {
        return (
          <li key={idx}>
            {name}: {errors[name].join(" ")}
          </li>
        );
      })}
    </ul>
  );
};

export default BackendErrorMessages;
