import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  fullName: yup.string().required("Bu alan zorunludur."),
  email: yup
    .string()
    .email("Lutfen gecerli bir email adresi giriniz")
    .required("Bu alan zorunludur."),
  password: yup.string().required("Bu alan zorunludur."),
  confirmPassword: yup.string().required("Bu alan zorunludur.").oneOf([yup.ref('password',yup.password)],'SIfreler ayni olmalidir'),
  term: yup.boolean().required("Bu alan zorunludur."),
});
