import "./card.scss";
import { Work } from "../../lib/utils/types";

type CardPropsType = {
  data: Work;
};

const Card = ({ data }: CardPropsType) => {
  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${data.cover_id}-M.jpg`}
        alt="cover"
      />
      <p>{data.title}</p>
    </div>
  );
};

export default Card;
