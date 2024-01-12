import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Proptypes from "prop-types";
import dateformat from "dateformat";

const CardItem = ({ title, tanggal, img }) => {
  return (
    <Card className="py-4 w-fit">
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
      </CardBody>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  title: Proptypes.string,
  tanggal: Proptypes.string,
  img: Proptypes.string,
};
