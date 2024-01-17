import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";
import OnlyNotLogin from "./utililty/OnlyNotLogin";
import OnlyLogin from "./utililty/OnlyLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <OnlyLogin>
              <Admin />
            </OnlyLogin>
          }
        />
        <Route
          path="/login-admin"
          element={
            <OnlyNotLogin>
              <LoginAdmin />
            </OnlyNotLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
