import { getUserInfoAction, userLoginAction, userLoginProps, userLogoutAction } from "../actions";
import { useAppContext } from "@ui/src/components/user-provider";
import { AppActionType } from "../actions/AppActionType";
import { UserType } from "../types/UserType";
import { TokensType } from "../types/TokensType";
import { jwtDecode } from "jwt-decode";
import { useToast } from "@ui/src/components/ui/use-toast";
import { useRouter } from "next/navigation";

type JwtPayloadType = {
  username: string,
  family_name: string,
  given_name: string,
  exp: number,
}

export function useAuth() {
  const { dispatch } = useAppContext();
  const { toast } = useToast();
  const router = useRouter();

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  /**
   * Process token to user info
   * @param session
   * @returns UserType
   */
  const updateUserInfo = (session: TokensType): UserType => {
    const { username, family_name, given_name } = jwtDecode<JwtPayloadType>(session.access_token);
    const user: UserType = {
      username,
      family_name,
      given_name
    };

    dispatch({
      type: AppActionType.UPDATE_USER,
      payload: {
        isLoggedIn: true,
        user
      }
    });

    return user;
  }

  /**
   * Receives user tokens from server api.
   * Keeps tokens to cookies and user info to context state
   * @param values
   */
  const userLogin = async (payload: userLoginProps) => {
    const tokens = await userLoginAction(payload);
    if (tokens) {
      const user = updateUserInfo(tokens);
      const date = new Date();

      toast({
        variant: "default",
        title: !user ? "An error occurred" : `${user.username} successfully logged in`,
        description: `${weekday.at(date.getDay())},
          ${date.toLocaleString("default", { month: "long" })} ${date.getDate()},
          ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`,
      });

      router.push('/');
    }
  }

  /**
   * Removes user session from server session storage
   * Clear cookies and user info from the context
   */
  const userLogout = async () => {
    const result = await userLogoutAction();
    dispatch({
      type: AppActionType.REMOVE_USER,
    });

    toast({
      variant: "default",
      title: "Your are successfully logged out",
      description: "All session data has been deleted from the local system",
    });

    router.push('/login');
  }

  /**
   * Set user info to context from cookies if present
   * @returns void
   */
  const setUserInfo = async () => {
    const user = await getUserInfoAction();
    if (!user) return;

    dispatch({
      type: AppActionType.UPDATE_USER,
      payload: {
        isLoggedIn: true,
        user
      }
    });
  }

  return { userLogin, userLogout, setUserInfo }
}
