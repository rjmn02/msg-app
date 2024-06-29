import { PropsWithChildren, createContext, useContext, useState } from "react";

type User = {
  userName: string;
}

type AuthContextType = {
  signIn: (email: string, password: string) => void;
  signUp: (user: User, email: string, password: string) => void;
  signOut: () => void;
  isAuthenticated?: boolean;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
  signUp: () => null,
  isAuthenticated: undefined,
});


// This hook can be used to access the user info.
export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useAuth must be wrapped in a <AuthContextProvider />');
    }
  }

  return value;
}

export function AuthContextProvider(props: PropsWithChildren) {
  const [isAuthenticated, setAuthenticated] = useState(undefined);

  const signIn = async (email: string, password: string) => {
  };
  const signUp = async (user: User, email: string, password: string) => {};
  const signOut = async () => {};
  return 
  <AuthContext.Provider
    value={{
      signIn,
      signUp,
      signOut,
      isAuthenticated,
    }}>
    {props.children}
  </AuthContext.Provider>
}
