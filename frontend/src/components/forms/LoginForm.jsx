import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, Box, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";


import { useLoginMutation } from "../../store/api/usersApiSlice";
import { setCredentials } from "../../store/features/auth/authSlice";

import Loader from "../../components/Loader";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

const FormContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "100%",
  margin: theme.spacing(2),
}));

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if (userInfo) {
        navigate("/");
      }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
      e.preventDefault();
      setError(null);
      try {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
      } catch (err) {
        setError(
          err?.data?.message || err.error || "An error occurred during login"
        );
      }
    };

  return (
    <FormContainer>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom align="center">
            Sign In
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <StyledForm onSubmit={submitHandler}>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <CustomButton type="submit" fullWidth disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </CustomButton>
          </StyledForm>
          {isLoading && <Loader />}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            New user?{" "}
            <Link
              to="/register"
              style={{ color: "green", textDecoration: "none" }}
            >
              Register
            </Link>
          </Typography>
        </CardContent>
      </StyledCard>
    </FormContainer>
  );
};

export default Login;
