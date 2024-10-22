import TextField from "@mui/material/TextField";

const Input = ({ ...props }) => {
  return <TextField variant="outlined" fullWidth margin="normal" {...props} />;
};

export default Input;
