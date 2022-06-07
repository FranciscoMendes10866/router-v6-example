import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, RequireAuth } from "./context/Auth";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";
import LoungePage from "./pages/Lounge";
import UnauthorizedPage from "./pages/Unauthorized";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/lounge" element={<LoungePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
