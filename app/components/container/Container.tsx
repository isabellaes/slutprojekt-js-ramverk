import { ReactNode } from "react";
import "./container.scss";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
