// import InputLabel from "@mui/material/InputLabel";
// import CustomInput from "../ui/CustomInput";
// import { Button } from "@mui/material";
// import { useFormik } from "formik";
// import { RegisterSchema } from "../../schemas/RegisterSchema";
// import { UserType } from "../../types/Type";
// import RegisterService from "../../services/RegisterService";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const submit = async (values: any, action: any) => {
//     try {
//       const payload: UserType = {
//         username: values.username,
//         password: values.password,
//         balance: 1000,
//       };
//       const response = await RegisterService.register(payload);
//       if (response) {
//         toast.success("Kayit Basarili");
//         action.resetForm();
//         navigate("/login");
//       }
//     } catch (err) {
//       toast.error("Kullanici Kaydi Basarisiz" + err);
//     }
//   };
//   const { values, handleChange, errors, handleSubmit } = useFormik<UserType>({
//     initialValues: {
//       id: String(Math.floor(Math.random() * 9999999)),
//       username: "",
//       password: "",
//       balance: 1000,
//     },
//     onSubmit: submit,
//     validationSchema: RegisterSchema,
//   });
//   return (
//     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl">
//       <div className="text-2xl text-center font-bold text-slate-800">
//         Register
//       </div>
//       <hr className="mt-4 text-slate-300" />
//       <form onSubmit={handleSubmit}>
//         <div className="">
//           <InputLabel
//             htmlFor="username"
//             size="small"
//             className="mb-5"
//             sx={{ fontSize: 14 }}
//           >
//             Username
//           </InputLabel>
//           <CustomInput
//             name="username"
//             type="text"
//             id="username"
//             value={values.username}
//             onChange={handleChange}
//             className="text-slate-800 font-semibold rounded px-2.5 py-1.5 border w-full border-gray-300 focus:ring focus:ring-gray-500 outline-none "
//           />
//           {errors && (
//             <div className="mt-1 text-sm text-red-500">{errors.username}</div>
//           )}
//         </div>
//         <div className="mb-4">
//           <InputLabel
//             htmlFor="password"
//             size="small"
//             className="mb-5"
//             sx={{ fontSize: 14 }}
//           >
//             Password
//           </InputLabel>
//           <CustomInput
//             name="password"
//             type="password"
//             id="Password"
//             value={values.password}
//             onChange={handleChange}
//             className="text-slate-800 font-semibold rounded px-2.5 py-1.5 border w-full border-gray-300 focus:ring focus:ring-gray-500 outline-none "
//           />
//           {errors && (
//             <div className="mt-1 text-sm text-red-500">{errors.password}</div>
//           )}
//         </div>
//         <Button type="submit" variant="contained" fullWidth color="primary">
//           Register
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;

import InputLabel from "@mui/material/InputLabel";
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import { RegisterSchema } from "../../schemas/RegisterSchema";
import { UserType } from "../../types/Type";
import RegisterService from "../../services/RegisterService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const RegisterForm = () => {
  const navigate = useNavigate();

  const submit = async (values: any, action: any) => {
    try {
      const payload: UserType = {
        username: values.username,
        password: values.password,
        balance: 1000,
      };
      const response = await RegisterService.register(payload);
      if (response) {
        toast.success("Kayit Basarili");
        action.resetForm();
        navigate("/login");
      }
    } catch (err) {
      toast.error("Kullanici Kaydi Basarisiz" + err);
    }
  };

  const { values, handleChange, errors, handleSubmit, touched } =
    useFormik<UserType>({
      initialValues: {
        id: String(Math.floor(Math.random() * 9999999)),
        username: "",
        password: "",
        balance: 1000,
      },
      onSubmit: submit,
      validationSchema: RegisterSchema,
    });

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fa",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Box
            sx={{
              padding: { xs: 3, sm: 5 },
              backgroundColor: "#fff",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "#1976d2",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
              >
                Create an Account
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mt: 1,
                }}
              >
                Please fill in your information to register
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 3 }}>
                <InputLabel
                  htmlFor="username"
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 1,
                  }}
                >
                  Username
                </InputLabel>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  error={touched?.username && Boolean(errors.username)}
                  helperText={touched?.username && errors.username}
                  placeholder="Choose a username"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <PersonOutlineOutlinedIcon
                        sx={{ color: "#9e9e9e", mr: 1 }}
                      />
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <InputLabel
                  htmlFor="password"
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 1,
                  }}
                >
                  Password
                </InputLabel>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched?.password && Boolean(errors.password)}
                  helperText={touched?.password && errors.password}
                  placeholder="Create a secure password"
                  variant="outlined"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <LockOutlinedIcon sx={{ color: "#9e9e9e", mr: 1 }} />
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<PersonAddAltOutlinedIcon />}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  borderRadius: "10px",
                  padding: "12px 0",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
                  },
                }}
              >
                Create Account
              </Button>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Already have an account?{" "}
                  <Typography
                    component="a"
                    href="/login"
                    variant="body2"
                    sx={{
                      color: "#1976d2",
                      textDecoration: "none",
                      fontWeight: 600,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Sign In
                  </Typography>
                </Typography>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterForm;
