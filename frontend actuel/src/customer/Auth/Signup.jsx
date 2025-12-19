import React from "react";
import { Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  role: Yup.string().required("Role is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        // Mock Register
        console.log("Signup values:", values);
        navigate("/");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg border">
        <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
           <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
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
           <FormControl fullWidth>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
                labelId="role-select-label"
                id="role-select"
                value={formik.values.role}
                label="Role"
                name="role"
                onChange={formik.handleChange}
            >
                <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"COMPANY_OWNER"}>Company Owner</MenuItem>
                <MenuItem value={"ADMIN"}>Admin</MenuItem>
            </Select>
            </FormControl>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Signup
          </Button>
          <div className="text-center mt-4">
            <span className="text-gray-600">Already have an account? </span>
            <Button color="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
