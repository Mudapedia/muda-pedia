import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Proptypes from "prop-types";
import dateformat from "dateformat";

const CardItem = ({ title, tanggal, img, callbackDelete, callbackUpdate }) => {
  return (
    <Card className="py-4 w-fit h-fit">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">
          {dateformat(Date.now(tanggal), "dddd dd mmm yyyy")}
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          width={300}
          src={img}
        />
        <section className="flex justify-between mt-5 font-bold">
          <Button
            color="danger"
            size="sm"
            className="font-bold]"
            onClick={callbackDelete}
          >
            Hapus
          </Button>
          <Button
            color="primary"
            size="sm"
            className="font-bold"
            onClick={callbackUpdate}
          >
            Ubah
            <svg
              className="w-3.5 h-3.5 mt-0.5"
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
          </Button>
        </section>
      </CardBody>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  title: Proptypes.string,
  tanggal: Proptypes.string,
  img: Proptypes.string,
  callbackDelete: Proptypes.func,
  callbackUpdate: Proptypes.func,
};
