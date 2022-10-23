import { AxiosResponse } from "axios";

export type errorType = {
  code?: string;
  response?: AxiosResponse;
  message: string;
};

const ErrorMessage = (props: { error?: errorType }) => {
  const { error } = props;

  console.log(error);
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
