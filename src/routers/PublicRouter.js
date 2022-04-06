import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/authorization/auth-selectors";

export default function PublicRouter({ children, resctricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && resctricted;
  if (!shouldRedirect) {
    return children;
  }
  return <Navigate to="/contacts" />;
}
