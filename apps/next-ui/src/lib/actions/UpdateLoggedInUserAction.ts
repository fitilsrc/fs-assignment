import { UserType } from "../types/UserType";
import { AppActionType } from "./AppActionType";

export type UpdateLoggedInUserAction = {
  type: AppActionType.UPDATE_USER;
  payload: {
    isLoggedIn: boolean;
    user: UserType;
  };
}
