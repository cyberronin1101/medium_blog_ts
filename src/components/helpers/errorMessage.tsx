export type errorType = {
  code?: string;
  message: string;
};

const ErrorMessage = (props: { error?: errorType }) => {
  let { error } = props;
  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Something went wrong</div>;
};

export default ErrorMessage;
