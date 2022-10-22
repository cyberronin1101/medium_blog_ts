import { ReactNode } from "react";

type propsType = {
  title: ReactNode;
  desc?: ReactNode;
};

const TopBanner = ({ title, desc }: propsType): JSX.Element => {
  return (
    <div className={"banner"}>
      <div className={"container"}>
        <h1>{title}</h1>
        {desc && <p>${desc}</p>}
      </div>
    </div>
  );
};

export default TopBanner;
