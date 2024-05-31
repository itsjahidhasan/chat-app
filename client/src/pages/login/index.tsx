import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuthContext } from "../../context/auth-context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiRoutes } from "../../common/api-routes";
import { PostRequest } from "../../utils/service";
import { CustomTextField } from "../../components/form";
import { useEffect } from "react";
interface FormValues {
  email: string;
  password: string;
}
interface Request {
  email: string;
  password: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  token: string;
}
interface Response {
  status: boolean;
  message: string;
  data: UserData;
}

const validationSchema = yup.object({
  email: yup.string().required().label("Email"),
  password: yup.string().required().label("Password"),
});
const Login = () => {
  const navigate = useNavigate();
  const { user, handleSetUserData } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    PostRequest<Request, Response>(ApiRoutes.LOGIN, data).then(async (res) => {
      if (res?.status) {
        await handleSetUserData(res?.data);
        navigate("/");
      }
    });
  };

  useEffect(() => {
    Object.keys(user).length && navigate("/");
  }, [user?.name]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <CustomTextField
                id="email"
                placeholder="Email"
                errors={errors}
                register={register}
              />
              <CustomTextField
                id="password"
                placeholder="Password"
                errors={errors}
                register={register}
              />
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
