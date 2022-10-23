const BackendErrorMessages = ({
  errors,
}: {
  errors: { [key: string]: string[] };
}) => {
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
