import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DeleteTokenAndLocalStorage,
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
  handleSetUserData: (data: User) => void;
  removeUser: () => void;
}

export const AuthContext = createContext<useAuthContextReturnype>({
  user: {},
  token: "",
  handleSetUserData: ({}) => {},
  removeUser: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const authUser = GetUserFromLocalStorage();
  const authToken = GetTokenFromLocalStorage();

  const handleSetUserData = (data: User) => {
    const userData = {
      _id: data?._id,
      email: data?.email,
      name: data?.name,
    };
    setUser(userData);
    setToken(token);
    SetUserToLocalStorage(userData);
    SetTokenToLocalStorage(data?.token);
  };

  const removeUser = () => {
    setUser({});
    setToken("");
    DeleteTokenAndLocalStorage();
  };

  useEffect(() => {
    setUser(authUser);
  }, [authUser?._id, authUser?.email, authUser?.name]);

  useEffect(() => {
    const token = GetTokenFromLocalStorage();
    setToken(token || "");
  }, [authToken]);
  return (
    <AuthContext.Provider
      value={{ user, token, handleSetUserData, removeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): useAuthContextReturnype => {
  return useContext<useAuthContextReturnype>(AuthContext);
};
