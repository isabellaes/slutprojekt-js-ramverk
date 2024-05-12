"use Client";

import style from "./button.module.scss";

type ButtonProps = {
  handleOnClick: () => void;
  title: string;
};

const Button = ({ handleOnClick, title}: ButtonProps) => {
  return (
    <button
      className={style.btn}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
};

export default Button;
