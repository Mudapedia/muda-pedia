import Proptypes from "prop-types";
import TextLoading from "./TextLoading.jsx";
import SearchInput from "./SearchInput.jsx";

const Jumbotron = ({
  setFormAddShowHide,
  contents,
  setContents,
  loadingContents,
  setLoadingContents,
  setSrc,
  setContentsHasMore,
  setStartContent,
  isEmpty,
  setIsEmpty,
}) => {
  const btnAddArticle = () => {
    setFormAddShowHide("");
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-4 lg:pb-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Selamat datang Admin
        </h1>
        <p className="mb-2 mt-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Muda pedia yang suka berimajinasi terangi hari 😆🎉
        </p>
        {loadingContents || contents.length === 0 ? (
          !isEmpty ? (
            <TextLoading />
          ) : (
            <p className="mb-8 text-lg text-gray-500">
              Ada
              <span className="ml-1 text-xl font-bold">
                {contents.length}
              </span>{" "}
              {""}
              article
            </p>
          )
        ) : (
          <p className="mb-8 text-lg text-gray-500">
            Ada
            <span className="ml-1 text-xl font-bold">
              {contents.length}
            </span>{" "}
            article
          </p>
        )}
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
            type="button"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 gap-2"
            onClick={btnAddArticle}
          >
            <svg
              className="w-3.5 h-3.5 ms-2 rotate-180"
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
            Tambahin artikel yuk
          </button>
        </div>
        <SearchInput
          setContents={setContents}
          setLoadingContents={setLoadingContents}
          setSrc={setSrc}
          setContentHasMore={setContentsHasMore}
          setStartContent={setStartContent}
          setIsEmpty={setIsEmpty}
        />
      </div>
    </section>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  setFormAddShowHide: Proptypes.func,
  contents: Proptypes.array,
  setContents: Proptypes.func,
  loadingContents: Proptypes.bool,
  setLoadingContents: Proptypes.func,
  setSrc: Proptypes.func,
  setContentsHasMore: Proptypes.func,
  setStartContent: Proptypes.func,
  isEmpty: Proptypes.bool,
  setIsEmpty: Proptypes.func,
};
