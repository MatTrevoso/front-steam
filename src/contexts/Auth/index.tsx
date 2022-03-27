import { createContext, useCallback, useState } from "react";
import { Provider } from "./provider";

const AuthContext = createContext({} as Provider);
export default AuthContext;

type Props = {
  children: React.ReactChild;
};

export function AuthProvider({ children }: Props) {
  const [userIsSigned, setUserIsSigned] = useState(false);
  const user = "";

  const signIn = useCallback(() => {
    setUserIsSigned(true);
  }, []);

  const signOut = useCallback(() => {
    setUserIsSigned(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        userIsSigned,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
