import { PropsWithChildren, createContext, useContext } from "react";

type User = {
  userName: string;
}

type AuthContextType = {
  signIn: (email: string, password: string) => void;
  signUp: (user: User, email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
  signUp: () => null,
});


// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: PropsWithChildren) {
  const signIn = async (email: string, password: string) => {};
  const signUp = async (user: User, email: string, password: string) => {};
  const signOut = async () => {};
  return 
  <AuthContext.Provider
    value={{
      signIn,
      signUp,
      signOut,
    }}>
    {props.children}
  </AuthContext.Provider>
}
