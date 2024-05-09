import "./counter.scss";

type CounterProps = {
  number: number;
  title: string;
};

const Counter = ({ number, title }: CounterProps) => {
  return (
    <div className="counter">
      <div className="circle">
        <h1>{number}</h1>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
