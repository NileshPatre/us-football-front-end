import React from "react";
import "./errorComponent.scss";
interface Props {
  message: string;
}
const ErrorComponent: React.FC<Props> = ({ message }) => {
  return (
    <div className="error-component">
      <h2>{message}</h2>
    </div>
  );
};

export default ErrorComponent;
