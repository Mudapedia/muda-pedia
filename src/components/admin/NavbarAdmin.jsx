import Logo from "../../assets/logo-muda-pedia.png";
import { Button } from "@nextui-org/react";
import Auth from "../../api/Auth";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
  const redirect = useNavigate();
  const logout = async () => {
    await Auth.Logout();
    redirect("/login-admin");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900  flex justify-between items-center pt-4 pb-2 px-10 ">
      <section className="flex items-center gap-2">
        <img src={Logo} width={"60"} alt="mudapedia" />
        <p className="font-bold text-xl">Muda pedia</p>
      </section>
      <Button color="primary" className="font-bold" onClick={logout}>
        Logout
      </Button>
    </nav>
  );
};

export default NavbarAdmin;
