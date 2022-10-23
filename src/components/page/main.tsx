import { ReactNode } from "react";
import Sidebar from "./sidebar";

const Main = (props: { children: ReactNode }) => {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-md-9"} style={{ minWidth: 0 }}>
          {props.children}
        </div>
        <div className={"col-md-3"}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
