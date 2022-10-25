import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../context/titleContext";

const Error404 = () => {
  const [, setTitle] = useContext(CurrentTitleContext);

  useEffect(() => {
    setTitle({
      title: "Error404",
    });
  }, [setTitle]);

  return <div>Page not Found</div>;
};

export default Error404;
