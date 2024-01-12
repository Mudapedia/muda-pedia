import Proptypes from "prop-types";

const ServerError = ({ txt }) => {
  return (
    <section className="bg-gray-900 h-[100vh] flex justify-center items-center">
      <h1 className="text-white">{txt}</h1>
    </section>
  );
};

export default ServerError;

ServerError.propTypes = {
  txt: Proptypes.string,
};
