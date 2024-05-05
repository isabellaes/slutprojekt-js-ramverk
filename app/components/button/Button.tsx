"use Client";

import "./button.scss";

type ButtonProps = {
  handleOnClick: () => void;
  title: string;
};

const Button = ({ handleOnClick, title }: ButtonProps) => {
  return <button className="btn" onClick={handleOnClick}>{title}</button>;
};

export default Button;
