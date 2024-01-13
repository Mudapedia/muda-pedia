import { Editor } from "@tinymce/tinymce-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoadingAnimate from "../LoadingAnimate";
import Notif from "./Notif";
import Content from "../../api/content";
import { useRef } from "react";

const FormUpdate = ({
  formUpdateShowHide,
  setFormUpdateShowHide,
  setContents,
  dataUpdate,
  setDataUpdate,
}) => {
  const [text, setText] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [notifShowHide, setNotifShowHide] = useState("hidden");
  const [notifType, setNotifType] = useState({});

  // field
  const [judul, setJudul] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // ref
  const formRef = useRef(null);

  useEffect(
    function () {
      setJudul(dataUpdate.title);
      setThumbnail(dataUpdate.thumbnail);
      setText(dataUpdate.description);
    },
    [dataUpdate]
  );

  const back = () => {
    setFormUpdateShowHide("-translate-x-full");
    setText("");
    setJudul("");
    setThumbnail("");
    setDataUpdate({});
    formRef.current.reset();
  };

  const btnUpdate = async (e) => {
    try {
      e.preventDefault();
      setBtnLoading(true);
      setBtnDisable(true);

      const res = await Content.Update(dataUpdate._id, {
        title: judul,
        thumbnail: thumbnail,
        description: text,
      });

      setBtnDisable(false);
      setBtnLoading(false);
      setNotifType({
        status: true,
        msg: res.data.message,
      });

      setContents((prev) => {
        let i = 0;
        let run = true;
        while (i < prev.length && run) {
          if (prev[i]._id === dataUpdate._id) {
            prev[i].title = judul;
            prev[i].thumbnail = thumbnail;
            prev[i].description = text;
            run = false;
          }

          i++;
        }
        return prev;
      });

      setNotifShowHide("");
      setText("");
      formRef.current.reset();
      setJudul("");
      setThumbnail("");
      setDataUpdate({});
    } catch (err) {
      setBtnDisable(false);
      setBtnLoading(false);
      setNotifType({
        status: false,
        msg: err.response.data.message,
      });
      setNotifShowHide("");
    }
  };

  const closeNotif = () => {
    setNotifShowHide("hidden");
    setFormUpdateShowHide("-translate-x-full");
  };

  return (
    <section
      className={`fixed z-10 top-0 left-0 right-0 bottom-0 bg-white flex flex-col justify-between items-center py-2  transition-all ${formUpdateShowHide}`}
    >
      <Notif
        notifShowHide={notifShowHide}
        callback={closeNotif}
        notifType={notifType}
      />
      <section className="text-center">
        <h1 className="text-xl font-bold">Ubah artikel</h1>
      </section>
      <form onSubmit={btnUpdate} ref={formRef}>
        <section className="flex items-start gap-10">
          <Editor
            required
            apiKey="po4fi8n43zgwum6n8cmh9pywrf04ps6j1jtcpkrgndbz023p"
            onEditorChange={(newText) => setText(newText)}
            value={text}
            init={{
              height: 500,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
              images_reuse_filename: true,
            }}
          />
          <section className="flex flex-col gap-4">
            <section className="flex flex-col">
              <label htmlFor="judul" className="text-base font-bold">
                Judul
              </label>
              <input
                type="text"
                id="judul"
                className="border outline-none py-1 px-2 text-sm rounded-md focus:shadow-inner focus:shadow-blue-50 w-56"
                onChange={(e) => setJudul(e.target.value)}
                required
                defaultValue={dataUpdate.title}
              />
            </section>
            <section className="flex flex-col">
              <label htmlFor="judul" className="text-base font-bold">
                Thumbnail
              </label>
              <input
                type="text"
                id="judul"
                className="border outline-none py-1 px-2 text-sm rounded-md focus:shadow-inner focus:shadow-blue-50 w-56"
                placeholder="url"
                onChange={(e) => setThumbnail(e.target.value)}
                required
                defaultValue={dataUpdate.thumbnail}
              />
            </section>
            {thumbnail?.length > 0 ? (
              <>
                <p className="text-sm mt-10">Preview</p>
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  width={200}
                  className="rounded-md"
                />
              </>
            ) : (
              ""
            )}
          </section>
        </section>
        <section className="flex justify-between items-center flex-wrap mt-3">
          <button
            disabled={btnDisable}
            type="submit"
            className="inline-flex justify-center items-center py-2 px-5 text-sm font-medium text-center text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-2"
          >
            {btnLoading ? <LoadingAnimate /> : "Ubah"}
          </button>
          <p
            className="flex justify-center items-center cursor-pointer"
            onClick={back}
          >
            <svg
              className="w-3.5 h-3.5 ms-2 rotate-180 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            Kembali
          </p>
        </section>
      </form>
    </section>
  );
};

export default FormUpdate;

FormUpdate.propTypes = {
  formUpdateShowHide: PropTypes.string,
  setFormUpdateShowHide: PropTypes.func,
  setContents: PropTypes.func,
  dataUpdate: PropTypes.object,
  setDataUpdate: PropTypes.func,
};
