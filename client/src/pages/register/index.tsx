import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomTextField } from "../../components/form";
import { PostRequest } from "../../utils/service";
import { ApiRoutes } from "../../common/api-routes";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

interface FormValues {
  name: string;
  email: string;
  password: string;
}
interface Request {
  name: string;
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
  name: yup.string().required().label("Name"),
  email: yup.string().required().label("Email"),
  password: yup.string().required().label("Password"),
});

const Register = () => {
  const navigate = useNavigate();
  const { handleSetUserData } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: FormValues) => {
    PostRequest<Request, Response>(ApiRoutes.REGISTER, data).then((res) => {
      if (res?.status) {
        navigate("/");
        handleSetUserData(res?.data);
      }
    });
  };

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
          <Col xs={12} sm={10} md={6}>
            <Stack gap={3}>
              <h2>Register</h2>

              <CustomTextField
                id="name"
                placeholder="Name"
                errors={errors}
                register={register}
              />
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
                Register
              </Button>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
