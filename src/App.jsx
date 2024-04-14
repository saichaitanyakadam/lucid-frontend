import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  About,
  Contact,
  DnsRecords,
  Home,
  Login,
  MyAccount,
  Register,
  Services,
} from "./pages";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            exact
            element={
              <AuthenticatedRoute>
                <Home />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/about"
            exact
            element={
              <AuthenticatedRoute>
                <About />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/services"
            exact
            element={
              <AuthenticatedRoute>
                <Services />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/contact"
            exact
            element={
              <AuthenticatedRoute>
                <Contact />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/my-account"
            exact
            element={
              <AuthenticatedRoute>
                <MyAccount />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/dns-records/:hostedZoneId"
            exact
            element={
              <AuthenticatedRoute>
                <DnsRecords />
              </AuthenticatedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
