import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useReducer,
} from "react";
import { userType } from "../types/apiTypes";

export enum userContextActions {
  LOADING = "LOADING",
  SET_AUTHORIZED = "SET_AUTHORIZED",
  SET_UNAUTHORIZED = "SET_UNAUTHORIZED",
}

type actionType = {
  type: userContextActions;
  payload?: any;
};

type userContextType = {
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser: userType | null;
};

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  currentUser: null,
};

const currentUserReducer = (state: userContextType, action: actionType) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "SET_AUTHORIZED":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.payload as userType,
      };
    case "SET_UNAUTHORIZED":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export const CurrentUserContext = createContext<
  [userContextType, Dispatch<actionType>]
>([initialState, () => {}]);

export const CurrentUserProvider = ({ children }: PropsWithChildren) => {
  const value = useReducer(currentUserReducer, initialState);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
