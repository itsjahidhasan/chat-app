import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../context/auth-context";

const NavBar = () => {
  const { user, removeUser } = useAuthContext();

  return (
    <Navbar bg="drak" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to={"/"} className="link-light text-decoration-none">
            Chat app
          </Link>
        </h2>
        {Object.keys(user).length ? (
          <span className="text-warning">Login as {user?.name}</span>
        ) : (
          ""
        )}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {Object.keys(user).length ? (
              <Link
                onClick={() => removeUser()}
                to={"/login"}
                className="link-light text-decoration-none"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to={"/login"} className="link-light text-decoration-none">
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="link-light text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
