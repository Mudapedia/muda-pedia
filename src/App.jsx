import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
