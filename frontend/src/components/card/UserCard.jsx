import { Card, CardContent, Typography, Box } from "@mui/material";
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

const UserCard = () => {
  return (
    <CenteredContainer>
      <StyledCard>
        <StyledCardContent>
          <StyledTypography>User card</StyledTypography>
        </StyledCardContent>
      </StyledCard>
    </CenteredContainer>
  );
};

export default UserCard;
