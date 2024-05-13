import styles from "./card.module.scss";

type CardPropsType = {
  title: string;
  img: string;
};

const Card = ({ title, img }: CardPropsType) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="cover" />

      <p>{title}</p>
    </div>
  );
};

export default Card;
