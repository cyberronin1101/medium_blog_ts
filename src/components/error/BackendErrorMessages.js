let BackendErrorMessages = ({ backendErrors }) => {
  return (
    <ul className={"error-messages"}>
      {Object.keys(backendErrors).map((name, idx) => {
        return (
          <li key={idx}>
            {name}: {backendErrors[name].join(" ")}
          </li>
        );
      })}
    </ul>
  );
};

export default BackendErrorMessages;
