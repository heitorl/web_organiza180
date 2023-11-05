import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import PropTypes from "prop-types";

export const LetterAvatars = ({ name }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[0].toUpperCase()}</Avatar>
    </Stack>
  );
};

LetterAvatars.propTypes = {
  name: PropTypes.string.isRequired,
};
