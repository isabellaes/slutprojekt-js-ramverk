import "./card.scss";
import defaultImg from "../../images/No-Image-Placeholder.svg.png";

type CardPropsType = {
  title: string;
  img: string;
};

const Card = ({ title, img }: CardPropsType) => {
  return (
    <div className="card">
      <img src={img} alt="cover" />

      <p>{title}</p>
    </div>
  );
};

export default Card;
