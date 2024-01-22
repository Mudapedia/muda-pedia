import { Helmet, HelmetProvider } from "react-helmet-async";
import Alert from "../components/admin/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../api/Auth";

const LoginAdmin = () => {
  const [alertShow, setAlertShow] = useState({
    show: "-translate-x-full",
  });
  const [btnDisable, setBtnDisable] = useState(false);
  const redirect = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const btnLogin = async (e) => {
    try {
      e.preventDefault();
      setBtnDisable(true);

      await Auth.Login({
        username: username,
        password: password,
      });

      setAlertShow({
        show: "",
        alertType: "success",
      });

      setTimeout(() => {
        redirect("/admin");
      }, 2000);
    } catch (err) {
      setAlertShow({
        show: "",
        alertType: "error",
        txt: err.response.data.message,
      });
      setBtnDisable(false);
    }
  };

  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <title>Login Admin</title>
        </Helmet>
        <section className="h-[100vh] flex justify-center items-center">
          <section className=" -mt-32">
            <section className="w-full h-20 overflow-hidden">
              <Alert
                alertType={alertShow?.alertType}
                txt={alertShow?.txt}
                show={alertShow?.show}
              />
            </section>
            <h1 className="font-bold mb-2">Selamat datang admin</h1>
            <form className=" w-96" onSubmit={btnLogin}>
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="txt"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <section className="flex gap-5 items-center">
                <button
                  type="submit"
                  disabled={btnDisable}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
                <p
                  className="cursor-pointer text-sm"
                  onClick={() => setShowPassword(showPassword ? false : true)}
                >
                  Tampilkan password
                </p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default LoginAdmin;
