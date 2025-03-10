import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  username: yup.string().required("Bu alan doldurulmalidir"),
  password: yup.string().required("Bu alan doldurulmalidir"),
});
