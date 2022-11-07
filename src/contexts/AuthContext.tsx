import { createContext, ReactNode } from 'react';

type UserProps = {
  name: string;
  avatarUrl: string;
};

export type AuthContextDataProps = {
  user: UserProps;

  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextDataProps);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const signIn = async () => {};

  const user = {
    name: 'Bruno',
    avatarUrl: 'https://github.com/brunoc-cardoso.png',
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
