import { useState, useEffect } from "react";
import LoadingPage from "../components/LoadingPage";
import Proptypes from "prop-types";
import Auth from "../api/Auth";
import { useNavigate } from "react-router-dom";
import ServerError from "../components/ServerError";

const OnlyLogin = ({ children }) => {
  const [isLogin, setIslogin] = useState(false);
  const [isServerError, setIsServerError] = useState("");
  const redirect = useNavigate();

  useEffect(
    function () {
      Auth.IsLogin()
        .then(() => setIslogin(true))
        .catch((err) => {
          const statusCode = err.response.status;
          if (statusCode === 403) {
            redirect("/login-admin");
          } else {
            setIsServerError(err.response?.data?.message);
          }
        });
    },
    [redirect]
  );

  return isServerError.length > 0 ? (
    <ServerError txt={isServerError} />
  ) : isLogin ? (
    children
  ) : (
    <LoadingPage />
  );
};

export default OnlyLogin;

OnlyLogin.propTypes = {
  children: Proptypes.object,
};
