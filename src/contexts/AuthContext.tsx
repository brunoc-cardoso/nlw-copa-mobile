import { createContext, ReactNode, useEffect, useState } from 'react';

import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

type UserProps = {
  name: string;
  avatarUrl: string;
};

export type AuthContextDataProps = {
  user: UserProps;
  signIn: () => Promise<void>;
  isUserLoading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextDataProps);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      '618286263563-bimvjfri4dqegotu52c9bj0iena7dkjh.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email'],
  });

  const signIn = async () => {
    try {
      setIsUserLoading(true);

      await promptAsync();
    } catch (error) {
      console.log('[error]: ', error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  };

  function signInWithGoogle(accessToken: string) {
    console.log('[access_token]: ', accessToken);
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }
  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        isUserLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
