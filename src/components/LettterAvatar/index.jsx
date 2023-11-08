import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
export const LetterAvatars = ({ name }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: "#92E9D9" }}>{name[0].toUpperCase()}</Avatar>
    </Stack>
  );
};

LetterAvatars.propTypes = {
  name: PropTypes.string.isRequired,
};
