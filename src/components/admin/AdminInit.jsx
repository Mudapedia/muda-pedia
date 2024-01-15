import NavbarAdmin from "./NavbarAdmin";
import CardItem from "./CardItem.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Proptypes from "prop-types";
import { useState } from "react";
import Confirm from "./Confirm.jsx";
import CardLoading from "./CardLoading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Content from "../../api/content.js";

const AdminInit = ({
  setFormAddShowHide,
  contents,
  setContents,
  setFormUpdateShowHide,
  setDataUpdate,
  loadingContents,
  setLoadingContents,
  isEmpty,
  setIsEmpty,
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
        const res = await Content.All(contents.length, 12, src);
        data = res.data;
        setStartContent(contents.length);
      } else {
        const res = await Content.All(startContent + 12, 12, src);
        setStartContent(startContent + 12);
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
          setIsEmpty={setIsEmpty}
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
        isEmpty={isEmpty}
        setIsEmpty={setIsEmpty}
      />
      {isEmpty ? (
        <section className="flex justify-center">
          <p className="font-bold">Artikel kosong</p>
        </section>
      ) : (
        <InfiniteScroll
          dataLength={contents.length}
          hasMore={contentsHasMore}
          next={getContentNext}
        >
          <section className="flex flex-wrap gap-14 justify-between px-14 pb-40">
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
      )}
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
  isEmpty: Proptypes.bool,
  setIsEmpty: Proptypes.func,
};
