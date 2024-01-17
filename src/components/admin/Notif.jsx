import { Button } from "@nextui-org/react";
import Proptypes from "prop-types";

const Notif = ({ notifShowHide, notifType, callback }) => {
  return (
    <section
      className={`w-full layar-hitam absolute z-20 top-0 h-[100vh] flex justify-center items-center ${notifShowHide}`}
    >
      <section className="p-4 rounded-md bg-white border border-gray-300 flex flex-col w-80">
        <h1 className="font-bold flex items-center gap-2 mb-1">
          Muda pedia
          {notifType?.status ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#42f569"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
            >
              <path
                fill="#f54242"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          )}
        </h1>
        <hr className="mb-2" />
        <small className="mb-10 ">{notifType?.msg}</small>
        <Button
          color="primary"
          size="sm"
          className="self-end"
          onClick={callback}
        >
          Close
        </Button>
      </section>
    </section>
  );
};

export default Notif;

Notif.propTypes = {
  notifShowHide: Proptypes.string,
  notifType: Proptypes.object,
  callback: Proptypes.func,
};
