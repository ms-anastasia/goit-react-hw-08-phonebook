import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/authorization/auth-selectors";
import { logOut } from "../../redux/authorization/auth-operations";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import defaultAvatar from "../../images/avatar.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="50" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <IconButton aria-label="logout" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
}
