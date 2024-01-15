import NavbarAdmin from "./NavbarAdmin";
import CardItem from "./CardItem.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Proptypes from "prop-types";
import { useState } from "react";
import Confirm from "./Confirm.jsx";
import CardLoading from "./CardLoading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Content from "../../api/content.js";
import LoadingAnimate from "../LoadingAnimate.jsx";
import { Button } from "@nextui-org/react";

const AdminInit = ({
  setFormAddShowHide,
  contents,
  setContents,
  setFormUpdateShowHide,
  setDataUpdate,
  loadingContents,
  setLoadingContents,
}) => {
  const [idDelete, setIdDelete] = useState("");
  const [showHideConfirm, setShowHideConfirm] = useState(false);
  const [contentsHasMore, setContentsHasMore] = useState(true);
  const [startContent, setStartContent] = useState(0);
  const [src, setSrc] = useState("");

  const btnDelete = (id) => {
    setIdDelete(id);
    setShowHideConfirm(true);
  };

  const getContentNext = async () => {
    try {
      let data = [];

      if (contents.length === 0) {
        return;
      } else if (startContent === 0) {
        const res = await Content.All(contents.length, 20, src);
        data = res.data;
        setStartContent(contents.length);
      } else {
        const res = await Content.All(startContent + 20, 20, src);
        setStartContent(startContent + 20);
        data = res.data;
      }

      if (data.length == 0) {
        setContentsHasMore(false);
        return;
      }
      setContents((prev) => [...prev, ...data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      {showHideConfirm ? (
        <Confirm
          setShowHideConfirm={setShowHideConfirm}
          id={idDelete}
          setContents={setContents}
        />
      ) : (
        ""
      )}
      <NavbarAdmin />
      <Jumbotron
        setFormAddShowHide={setFormAddShowHide}
        contents={contents}
        loadingContents={loadingContents}
        setLoadingContents={setLoadingContents}
        setContents={setContents}
        src={src}
        setSrc={setSrc}
        setContentsHasMore={setContentsHasMore}
        setStartContent={setStartContent}
      />
      <InfiniteScroll
        dataLength={contents.length}
        hasMore={contentsHasMore}
        next={getContentNext}
        loader={
          <section className="p-10 mt-10 mb-10 flex justify-center items-center">
            <LoadingAnimate />
          </section>
        }
        endMessage={
          <section className="flex flex-col justify-center items-center gap-4">
            <p className="text-center mt-20  font-bold">
              Total {contents.length} data artikel 🎉
            </p>
            <a href="#admin-top" className="mb-20">
              <Button color="primary" radius="sm" className="font-bold">
                Kembali keatas
              </Button>
            </a>
          </section>
        }
      >
        <section className="flex flex-wrap gap-14 justify-between px-14">
          {loadingContents ? <CardLoading count={6} /> : ""}
          {contents.map((content, i) => (
            <CardItem
              key={i}
              title={content.title}
              tanggal={content["created_at"]}
              img={content.thumbnail}
              callbackDelete={() => btnDelete(content._id)}
              callbackUpdate={() => {
                setFormUpdateShowHide("");
                setDataUpdate(content);
              }}
            />
          ))}
        </section>
      </InfiniteScroll>
    </section>
  );
};

export default AdminInit;

AdminInit.propTypes = {
  setFormAddShowHide: Proptypes.func,
  setFormUpdateShowHide: Proptypes.func,
  contents: Proptypes.array,
  setContents: Proptypes.func,
  setDataUpdate: Proptypes.func,
  loadingContents: Proptypes.bool,
  setLoadingContents: Proptypes.func,
};
