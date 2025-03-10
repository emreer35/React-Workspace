import { useFormik } from "formik";
import { RegisterFormSchema } from "../schemas/RegisterFormSchema";

const RegisterForm = () => {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
    console.log(values);
    console.log(action);
  };
  // destruct ederek use formik kullan
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchema,
    onSubmit: submit,
  });

  return (
    <div className="max-w-2xl mx-auto h-screen flex flex-col items-center justify-center">
      <div className="text-2xl text-center font-semibold mb-6">
        Registration Form
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="text-sm font-bold mb-2">Full Name</label>
          <input
            className="px-2.5 py-1.5 outline-none w-full border border-gray-300 rounded-md text-sm"
            type="text"
            value={values.fullName}
            id="fullName"
            placeholder="Enter Fullname"
            onChange={handleChange}
          />
          {errors.fullName ? (
            <div className="text-red-400 text-xs mt-2 font-semibold">
              {errors.fullName}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="text-sm font-bold mb-2">Email</label>
          <input
            className="px-2.5 py-1.5 outline-none w-full border border-gray-300 rounded-md text-sm"
            type="email"
            value={values.email}
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          {errors.email ? (
            <div className="text-red-400 text-xs mt-2 font-semibold">
              {errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="text-sm font-bold mb-2">Password</label>
          <input
            className="px-2.5 py-1.5 outline-none w-full border border-gray-300 rounded-md text-sm"
            type="password"
            value={values.password}
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
          {errors.password ? (
            <div className="text-red-400 text-xs mt-2 font-semibold">
              {errors.password}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="text-sm font-bold mb-2">Confirm Password</label>
          <input
            className="px-2.5 py-1.5 outline-none w-full border border-gray-300 rounded-md text-sm"
            type="password"
            value={values.confirmPassword}
            id="confirmPassword"
            placeholder="Enter confirm password"
            onChange={handleChange}
          />
          {errors.confirmPassword ? (
            <div className="text-red-400 text-xs mt-2 font-semibold">
              {errors.confirmPassword}
            </div>
          ) : null}
        </div>
        <div className="mb-3 ">
          <input
            className="px-2.5 py-1.5 outline-none me-2 border border-gray-300 rounded-md text-sm"
            type="checkbox"
            value={values.term}
            id="term"
            onChange={handleChange}
          />
          <label className="text-sm font-bold ">Accept All Term</label>
          {errors.term ? (
            <div className="text-red-400 text-xs mt-2 font-semibold">
              {errors.term}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 px-2.5 py-1.5 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
