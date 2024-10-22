import { Card, CardContent, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 256,
  height: 128,
  backgroundColor: theme.palette.grey[100],
  cursor: "pointer",
  transition: theme.transitions.create(["background-color", "box-shadow"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[4],
  },
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

const CenteredContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});


const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the app!
        </Typography>
        <CenteredContainer>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>Public card</StyledTypography>
            </StyledCardContent>
          </StyledCard>
        </CenteredContainer>
      </Container>
    </>
  );
};

export default HomePage;
