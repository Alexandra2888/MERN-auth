import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useLogoutMutation } from "../store/api/usersApiSlice";
import { logout } from "../store/features/auth/authSlice";

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "color"], {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:not(:last-child)": {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" sx={{ fontSize: "inherit", padding: 0 }}>
            My App
          </NavLink>
        </Typography>
        <Box>
          {userInfo ? (
            <>
              {userInfo && userInfo.isAdmin && (
                <NavLink to="/admin-card">Admin Card</NavLink>
              )}
              {userInfo && (
                <NavLink to="/user-card">User Card</NavLink>
              )}

              <Button
                onClick={logoutHandler}
                color="secondary"
                variant="contained"
                sx={{ ml: 2 }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
