import { createContext, Dispatch, ReactNode, useState } from "react";

type userType = {
  isLogin?: boolean;
  isLoggedIn?: boolean | null;
  currentUser: Object | null;
};

type propsType = [userType, Dispatch<userType>];

export const CurrentUserContext = createContext<propsType>([
  {
    isLogin: false,
    isLoggedIn: null,
    currentUser: null,
  },
  () => {},
]);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  let [state, setState] = useState<userType>({
    isLogin: false,
    isLoggedIn: null,
    currentUser: null,
  });

  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
