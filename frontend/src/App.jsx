import { lazy, Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header"; 

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const UserPage = lazy(() => import("./pages/UserPage")); 
const AdminPage = lazy(() => import("./pages/AdminPage")); 
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const PrivateRoute = lazy(() => import("./components/routes/PrivateRoute"));
const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Registered users */}
            <Route path="" element={<PrivateRoute />}>
              <Route
                path="/user-card"
                element={
                  <Suspense fallback={<Loader />}>
                    <UserPage />
                  </Suspense>
                }
              />
            </Route>

            {/* Admin routes */}
        <Route path="" element={<AdminRoute />}>
         
          <Route
            path="/admin-card"
            element={
              <Suspense fallback={<Loader />}>
                <AdminPage />
              </Suspense>
            }
          />
      </Route>
            <Route
              path="*"
              element={
                <Suspense fallback={<Loader />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
