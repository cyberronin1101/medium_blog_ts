import { apiErrorType } from "../../services/apiService/apiServiceTypes";

const ErrorMessage = ({ error }: { error: apiErrorType | string }) => {
  let message = "Something went wrong";

  if (typeof error === "string" && error) {
    message = error;
  }

  if (typeof error === "object") {
    if (error?.message) {
      message = error.message;
    }
  }

  return (
    <ul className={"error-messages"} style={{ margin: "10px 0" }}>
      <li>{message}</li>
    </ul>
  );
};

export default ErrorMessage;
