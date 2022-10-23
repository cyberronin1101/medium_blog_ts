import { createContext, Dispatch, ReactNode, useState } from "react";

type titleType = {
  title?: ReactNode;
  description?: ReactNode;
};

type propsType = [titleType, Dispatch<titleType>];

export const CurrentTitleContext = createContext<propsType>([{}, () => {}]);

export const CurrentTitleProvider = ({ children }: { children: ReactNode }) => {
  let [state, setState] = useState<titleType>({
    title: "Medium clone",
    description: "A place to share knowledge",
  });

  return (
    <CurrentTitleContext.Provider value={[state, setState]}>
      {children}
    </CurrentTitleContext.Provider>
  );
};
