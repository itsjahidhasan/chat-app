import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().required().label("Email"),
  password: yup.string().required().label("Password"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: any) => console.log(data);

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
              <h2>Register</h2>
              <div>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors?.name && (
                  <span className="text-danger">{errors?.name?.message}</span>
                )}
              </div>
              <div>
                <Form.Control
                  type="email"
                  placeholder="email"
                  {...register("email")}
                ></Form.Control>
                {errors?.email && (
                  <span className="text-danger">{errors?.email?.message}</span>
                )}
              </div>
              <div>
                <Form.Control
                  type="password"
                  placeholder="password"
                  {...register("password")}
                ></Form.Control>
                {errors?.password && (
                  <span className="text-danger">
                    {errors?.password?.message}
                  </span>
                )}
              </div>

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
