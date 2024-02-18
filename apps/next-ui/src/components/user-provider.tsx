"use client";

import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { UserType } from "../lib/types/UserType";
import { UpdateLoggedInUserAction } from "../lib/actions/UpdateLoggedInUserAction";
import { RemoveLoggedInUserAction } from "../lib/actions/RemoveLoggedInUserAction";
import { AppActionType } from "../lib/actions/AppActionType";
import { useAuth } from "../lib/hooks";
import { getUserInfoAction } from "../lib/actions";

export type AppStateType = {
  isLoggedIn?: boolean;
  user?: UserType;
}

export type AppAction =
  | UpdateLoggedInUserAction
  | RemoveLoggedInUserAction

export const appReducer = (state: AppStateType, action: AppAction) => {
  switch (action.type) {

    case AppActionType.UPDATE_USER:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };

    case AppActionType.REMOVE_USER:
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };

    default:
      return state;
  }
}

export const AppContext = createContext<{
  state: AppStateType,
  dispatch: Dispatch<AppAction>,
}>({
  state: {},
  dispatch: () => null,
});

export function useAppContext() {
  return useContext(AppContext)
}

export function AppProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(appReducer, {});

  return (
    <AppContext.Provider value={{state, dispatch}}>
      { children }
    </AppContext.Provider>
  );
}
