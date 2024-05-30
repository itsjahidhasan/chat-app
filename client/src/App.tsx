import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat";
import Register from "./pages/register";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/layout/shared/navbar/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="text-secondary">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
