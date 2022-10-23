import { createContext, Dispatch, ReactNode, useState } from "react";

type titleType = {
  title?: ReactNode;
  description?: ReactNode;
};

type propsType = [titleType, Dispatch<titleType>];

export const CurrentTitleContext = createContext<propsType>([{}, () => {}]);

export const CurrentTitleProvider = ({ children }: { children: ReactNode }) => {
  const defaultValue = {
    title: "Medium clone",
    description: "A place to share knowledge",
  };

  let [state, setState] = useState<titleType>(defaultValue);

  return (
    <CurrentTitleContext.Provider value={[state, setState]}>
      {children}
    </CurrentTitleContext.Provider>
  );
};
