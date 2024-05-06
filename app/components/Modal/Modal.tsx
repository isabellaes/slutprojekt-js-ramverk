import { ReactNode } from "react";
import "./modal.scss";

type ModalPropsType = {
  children: ReactNode;
};

const Modal = ({ children }: ModalPropsType) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;
