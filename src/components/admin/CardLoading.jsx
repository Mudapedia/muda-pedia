import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";

const CardLoading = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((v, i) => (
      <section
        key={i}
        className="w-80 border border-gray-200 rounded-xl pt-4 pb-5 px-4 bg-gray-200"
      >
        <section className="pt-2 w-1/3">
          <Skeleton count={2} />
        </section>
        <Skeleton count={1} height={300} style={{ borderRadius: "10px" }} />
        <section className="flex justify-between pt-5">
          <Skeleton
            count={1}
            width={80}
            height={30}
            style={{ borderRadius: "8px" }}
          />
          <Skeleton
            count={1}
            width={80}
            height={30}
            style={{ borderRadius: "8px" }}
          />
        </section>
      </section>
    ));
};

export default CardLoading;

CardLoading.propTypes = {
  count: PropTypes.number,
};
