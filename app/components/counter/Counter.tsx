import styles from "./counter.module.scss";

type CounterProps = {
  number: number;
  title: string;
};

const Counter = ({ number, title }: CounterProps) => {
  return (
    <div className={styles.counter}>
      <div className={styles.circle}>
        <h1>{number}</h1>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
