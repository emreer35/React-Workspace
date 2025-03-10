import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().required("Kullanici alani bos birakilamaz"),
  password: yup.string().required("Sifre alani bos birakilamaz"),
});
