import { createContext, ReactElement, useContext, useState } from "react";

interface AuthContextProviderProps {
  children: ReactElement;
}

interface useAuthContextReturnype {
  user: { name: string };
}

export const AuthContext = createContext<useAuthContextReturnype>({
  user: { name: "" },
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState({ name: "Jahid" });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = (): useAuthContextReturnype => {
  return useContext<useAuthContextReturnype>(AuthContext);
};
