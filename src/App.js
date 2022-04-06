import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from './components/AppBar';
import { refreshCurrentUser } from "./redux/authorization/auth-operations";
import { getIsFetchingCurrent } from "./redux/authorization/auth-selectors";
import PrivateRoute from "./routers/PrivateRouter";
import PublicRoute from "./routers/PublicRouter";
import { useDispatch, useSelector } from "react-redux";

const HomeView = lazy(() => import("./views/HomepageView"));
const RegisterView = lazy(() => import("./views/RegistrationView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Hi</h1>
      ) : (
          <>
            <AppBar />
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route index element={<HomeView />}></Route>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginView />
                  </PublicRoute>
                }
              ></Route>
              <Route path="*" element={<HomeView />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
};
export default App;
