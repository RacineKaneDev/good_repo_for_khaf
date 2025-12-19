import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        // Mock login
        console.log("Login values:", values);
        navigate("/");
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg border">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Login
          </Button>
          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <Button color="primary" onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
