import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./style";
import { LetterAvatars } from "../LettterAvatar";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const MenuAccount = ({ user }) => {
  const { userLogout } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleLogout =() => {

  // }

  return (
    <Container
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >
      <div className="col-info">
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={() => userLogout()}>Logout</MenuItem>
      </Menu>
      <LetterAvatars name={user.name} />
    </Container>
  );
};

MenuAccount.propTypes = {
  user: PropTypes.object.isRequired,
};
