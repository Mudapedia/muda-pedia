import { useState, useEffect } from "react";
import LoadingPage from "../components/LoadingPage";
import Proptypes from "prop-types";
import Auth from "../api/auth";
import { useNavigate } from "react-router-dom";
import ServerError from "../components/ServerError";

const OnlyNotLogin = ({ children }) => {
  const [isLogin, setIslogin] = useState(true);
  const [isServerError, setIsServerError] = useState("");
  const redirect = useNavigate();

  useEffect(
    function () {
      Auth.IsLogin()
        .then(() => redirect("/admin"))
        .catch((err) => {
          const statusCode = err.response.status;
          if (statusCode === 403) {
            setIslogin(false);
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
    <LoadingPage />
  ) : (
    children
  );
};

export default OnlyNotLogin;

OnlyNotLogin.propTypes = {
  children: Proptypes.object,
};
