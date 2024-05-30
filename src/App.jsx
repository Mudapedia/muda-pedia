import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";
import OnlyNotLogin from "./utililty/OnlyNotLogin";
import OnlyLogin from "./utililty/OnlyLogin";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/DetailBlog";
import Umkm from "./pages/umkm/Umkm";

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:article" element={<DetailBlog />} />

        <Route path="/:umkm" element={<Umkm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
