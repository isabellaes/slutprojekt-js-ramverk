"use Client";

import style from "./button.module.scss";

type ButtonProps = {
  handleOnClick: () => void;
  title: string;
  color?: "error";
};

const Button = ({ handleOnClick, title, color }: ButtonProps) => {
  return (
    <button
      className={color === "error" ? style.error : style.btn}
      onClick={handleOnClick}
    >
      {title.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
