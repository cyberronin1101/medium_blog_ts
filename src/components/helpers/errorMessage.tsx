import { apiErrorType } from "../../services/apiService/apiServiceTypes";

const ErrorMessage = (props: { error?: apiErrorType }) => {
  const { error } = props;

  let message = "Something went wrong";

  if (error?.message) {
    message = error.message;
  }

  return (
    <ul className={"error-messages"} style={{ margin: "10px 0" }}>
      <li>{message}</li>
    </ul>
  );
};

export default ErrorMessage;
