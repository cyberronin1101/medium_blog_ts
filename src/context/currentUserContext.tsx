import { createContext, ReactNode, useState } from "react";

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  let [state, setState] = useState({
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
