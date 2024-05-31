import { Form } from "react-bootstrap";

interface CustomTextFieldProps {
  id: string;
  errors?: any;
  register?: any;
  placeholder?: string;
}

export const CustomTextField = ({
  id,
  errors,
  register,
  placeholder,
}: CustomTextFieldProps) => {
  return (
    <div>
      <Form.Control type="text" placeholder={placeholder} {...register(id)} />
      {errors?.[id] && (
        <span className="text-danger">{errors?.[id]?.message}</span>
      )}
    </div>
  );
};
