import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useRegisterMutation } from "../../store/api/usersApiSlice";

import Loader from "../../components/Loader";
import { registerSchema } from "./schemas/RegisterSchema";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

const FormContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  width: "100%",
  margin: theme.spacing(2),
}));

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);


  const [register, { isLoading }] = useRegisterMutation();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();
    setValidationErrors({});

    const result = registerSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
      isAdmin,
    });

    if (!result.success) {
      const newErrors = result.error.errors.reduce((acc, { path, message }) => {
        acc[path[0]] = message;
        return acc;
      }, {});
      setValidationErrors(newErrors);
      return;
    }

    if (password !== confirmPassword) {
      setValidationErrors((errors) => ({
        ...errors,
        confirmPassword: "Passwords do not match.",
      }));
      return;
    }

    try {
      await register({
        name,
        email,
        password,
        isAdmin,
      }).unwrap();
      toast.success("User successfully registered");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error(
        err?.data?.message || "An error occurred during registration."
      );
    }
  };

  return (
    <>
      <FormContainer>
        <StyledCard>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              align="center"
            >
              Register
            </Typography>
            {Object.keys(validationErrors).length > 0 && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {Object.values(validationErrors).join(", ")}
              </Alert>
            )}
            <StyledForm onSubmit={submitHandler}>
              <Input
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
              <Input
                label="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
              <Input
                label="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />
              <Input
                label="Confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel id="user-type-label">User Type</InputLabel>
                <Select
                  labelId="user-type-label"
                  value={isAdmin.toString()}
                  onChange={(e) => setIsAdmin(e.target.value === "true")}
                  label="User Type"
                >
                  <MenuItem value="false">User</MenuItem>
                  <MenuItem value="true">Admin</MenuItem>
                </Select>
              </FormControl>
              <CustomButton type="submit" fullWidth disabled={isLoading}>
                {isLoading ? "Registering" : "Register"}
              </CustomButton>
            </StyledForm>
            {isLoading && <Loader />}
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Do you have an account?
              <Link
                to="/login"
                style={{ color: "green", textDecoration: "none" }}
              >
                Login
              </Link>
            </Typography>
          </CardContent>
        </StyledCard>
      </FormContainer>
    </>
  );
};

export default Register;
