import { CurrentUserProvider } from "./currentUserContext";
import { ReactNode } from "react";
import { CurrentTitleProvider } from "./titleContext";

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CurrentUserProvider>
      <CurrentTitleProvider>{children}</CurrentTitleProvider>
    </CurrentUserProvider>
  );
};

export default RootProvider;
