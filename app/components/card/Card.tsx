import "./card.scss";
import { Root, Work } from "../../lib/utils/types";

type CardPropsType = {
  title: string;
  img: number;
};

const Card = ({ title, img }: CardPropsType) => {
  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${img}-M.jpg`}
        alt="cover"
      />
      <p>{title}</p>
    </div>
  );
};

export default Card;
