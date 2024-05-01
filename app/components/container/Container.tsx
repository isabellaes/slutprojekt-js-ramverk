import { ReactNode } from "react";
import "./container.scss";

type ContainerProps = {
  size: string;
  children: ReactNode;
};

const Container = ({ size, children }: ContainerProps) => {
  return (
    <div className="container" style={{ maxWidth: `${size}` }}>
      {children}
    </div>
  );
};

export default Container;
