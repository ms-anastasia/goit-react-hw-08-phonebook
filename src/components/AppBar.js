import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../components/UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import { getIsLoggedIn } from "../redux/authorization/auth-selectors";
import { color } from "@mui/system";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
    backgroundColor: "#fff",
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
