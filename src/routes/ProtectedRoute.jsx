import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  const login = true;
  return login ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
