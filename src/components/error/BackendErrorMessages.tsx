import { backendErrorsType } from "../../types/apiTypes";

const BackendErrorMessages = ({ errors }: backendErrorsType) => {
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
