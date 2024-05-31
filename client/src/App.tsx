import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Chat from "./pages/chat";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/layout/shared/navbar/nav-bar";
import { useAuthContext } from "./context/auth-context";
import { useEffect } from "react";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  const nevigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
    token && nevigate("/");
  }, [token]);
  return (
    <>
      <NavBar />
      <Container className="text-secondary">
        <Routes>
          {token ? (
            <Route path={"/"} element={<Chat />} />
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}

          <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
