import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/authorization/auth-selectors";

export default function PrivateRouter({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
