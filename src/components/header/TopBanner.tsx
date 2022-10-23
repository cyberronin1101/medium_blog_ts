import { useContext } from "react";
import { CurrentTitleContext } from "../../context/titleContext";

const TopBanner = (): JSX.Element => {
  let [{ title, description }] = useContext(CurrentTitleContext);

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
