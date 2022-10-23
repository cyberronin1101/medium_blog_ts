import { useContext, useEffect } from "react";
import { CurrentTitleContext } from "../../context/titleContext";

const TopBanner = (): JSX.Element => {
  let [{ title, description }, set] = useContext(CurrentTitleContext);

  useEffect(() => {});

  return (
    <div className={"banner"}>
      <div className={"container"}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default TopBanner;
