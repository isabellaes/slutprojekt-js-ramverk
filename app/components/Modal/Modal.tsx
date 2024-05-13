import { ReactNode } from "react";
import style from "./modal.module.scss";

type ModalPropsType = {
  children: ReactNode;
};

const Modal = ({ children }: ModalPropsType) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Modal;
