import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";
import LoadingAnimate from "../LoadingAnimate";
import Content from "../../api/content";

const Confirm = ({ setShowHideConfirm, setContents, id, setIsEmpty }) => {
  const [btnDisableDelete, setBtnDisableDelete] = useState(false);
  const [btnDisableClose, setBtnDisableClose] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [prosesFetch, setProsesFetch] = useState(false);
  const [statusMessage, setStatusMessage] = useState({});

  const btnDel = async () => {
    try {
      setBtnDisableDelete(true);
      setBtnDisableClose(true);
      setBtnLoading(true);

      await Content.Del(id);

      setBtnDisableClose(false);
      setBtnLoading(false);
      setProsesFetch(true);
      setStatusMessage({
        status: true,
        msg: "berhasil",
      });
      setContents((prev) => {
        const result = prev.filter((val) => val._id != id);
        if (result.length === 0) {
          setIsEmpty(true);
        }
        return result;
      });
    } catch (err) {
      setProsesFetch(true);
      setBtnDisableClose(false);
      setBtnDisableDelete(false);
      setBtnLoading(false);
      setStatusMessage({
        status: false,
        msg: err.response.data.message,
      });
    }
  };

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 layar-hitam z-20 flex justify-center items-center">
      <section className="p-4 rounded-md bg-white border border-gray-300 flex flex-col w-80">
        <h1 className="font-bold flex items-center gap-2 mb-1">
          Muda pedia
          {prosesFetch ? (
            statusMessage?.status ? (
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
            )
          ) : (
            ""
          )}
        </h1>
        <hr className="mb-2" />
        <small className="mb-10 ">
          {statusMessage?.msg
            ? statusMessage.msg
            : "Yakin ingin hapus artikel ?"}
        </small>
        <section className="flex justify-between">
          <Button
            color="danger"
            size="sm"
            className="self-end"
            onClick={btnDel}
            disabled={btnDisableDelete}
          >
            {btnLoading ? <LoadingAnimate /> : "Hapus"}
          </Button>
          <Button
            color="primary"
            size="sm"
            className="self-end"
            onClick={() => setShowHideConfirm(false)}
            disabled={btnDisableClose}
          >
            Close
          </Button>
        </section>
      </section>
    </section>
  );
};

export default Confirm;

Confirm.propTypes = {
  setShowHideConfirm: PropTypes.func,
  id: PropTypes.string,
  setContents: PropTypes.func,
  setIsEmpty: PropTypes.func,
};
