import Proptype from "prop-types";

const Alert = ({ alertType, txt = "", show }) => {
  if (alertType === "success") {
    return (
      <div
        className={`break-all p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 ${show} transition-all duration-500`}
        role="alert"
      >
        <span className="font-medium">Login Success</span>
      </div>
    );
  } else {
    return (
      <div
        className={`p-4 mb-4 text-sm w-96 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 ${show} duration-500`}
        role="alert"
      >
        <span className="font-medium">Login Error</span> &nbsp;
        {txt.length > 44 ? txt.slice(0, 44) : txt}
      </div>
    );
  }
};

export default Alert;

Alert.propTypes = {
  alertType: Proptype.string,
  txt: Proptype.string,
  show: Proptype.string,
};
