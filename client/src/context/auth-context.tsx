import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GetTokenFromLocalStorage,
  GetUserFromLocalStorage,
  SetTokenToLocalStorage,
  SetUserToLocalStorage,
} from "./helper";

interface AuthContextProviderProps {
  children: ReactElement;
}

interface User {
  name: string;
  email: string;
  _id: string;
  token: string;
}

interface useAuthContextReturnype {
  user: { name?: string; email?: string; _id?: string };
  token: string;
  handleSetUserData: (data: any) => void;
}

export const AuthContext = createContext<useAuthContextReturnype>({
  user: { name: "" },
  token: "",
  handleSetUserData: ({}) => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const handleSetUserData = (data: User) => {
    const userData = {
      _id: data?._id,
      email: data?.email,
      name: data?.name,
    };
    SetUserToLocalStorage(userData);
    SetTokenToLocalStorage(data?.token);
  };

  useEffect(() => {
    setUser(GetUserFromLocalStorage());
  }, [GetUserFromLocalStorage()]);

  useEffect(() => {
    setToken(GetTokenFromLocalStorage());
  }, [GetTokenFromLocalStorage()]);
  return (
    <AuthContext.Provider value={{ user, token, handleSetUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): useAuthContextReturnype => {
  return useContext<useAuthContextReturnype>(AuthContext);
};
