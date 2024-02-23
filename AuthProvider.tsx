import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "./utils/Utils";

type AuthContextData = {
    authData?: boolean;
    signIn: () => void;
    signOut: () => void;
  };
  const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  const AuthProvider = ({ children }: { children: any }) => {
    const [authData, setAuthData] = useState<boolean>();
  
    useEffect(() => {
      const checkIfLoggedIn = async () => {
        const userData = await getUserData();
        setAuthData(!!userData);
      };
      checkIfLoggedIn();
    }, []);
  
    const signIn = () => {
      setAuthData(true);
    };
  
    const signOut = () => {
      setAuthData(false);
    };

    return (
      <AuthContext.Provider value={{ authData, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }
  export { AuthContext, AuthProvider, useAuth };