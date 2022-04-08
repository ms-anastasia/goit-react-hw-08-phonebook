import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/authorization/auth-selectors";

export default function PublicRouter({ children, redirectPath = "/contacts" }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
