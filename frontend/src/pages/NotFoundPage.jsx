import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home Page
      </Button>
    </Box>
  );
};

export default NotFoundPage;
