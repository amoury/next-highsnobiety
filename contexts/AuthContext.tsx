import { useState, createContext } from 'react';

type TAuthSuccessResponse = {
  token: string;
  userInfo: {
    id: number;
    role: "customer",
    username: string;
    email: string;
    avatar_url?: string;
  } 
}

const defaultValue = {
  token: null,
  userInfo: {},
}

const defaultAuthState = {
  authState: defaultValue,
  setAuthState: (authInfo: TAuthSuccessResponse) => null,
}

const AuthContext = createContext(defaultAuthState);


const AuthProvider = ({ children }): JSX.Element => {
  const [authState, setAuthState] = useState(defaultValue);

  const setAuthInfo = (data) => {
    const { token, userInfo } = data;
    setAuthState({ token, userInfo });
  }

  const providerValue = {
    authState, 
    setAuthState: (authInfo: TAuthSuccessResponse) => {
      setAuthInfo(authInfo)
    }
  }

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };