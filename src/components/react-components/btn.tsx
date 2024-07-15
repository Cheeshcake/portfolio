import { useState } from "react";

interface Props {
  title?: string;
  icon?: boolean;
}

const Btn = ({ title = "Button", icon = false, hidden = true }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <button
      type="button"
      className={`button-primary button-text-semibold ${hidden ? "hidden" : "flex"} md:flex md:items-center`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {title}
      {icon && (
        <img
          src="/assets/download-logo.png"
          alt="download-logo"
          className={`ml-3 ${isActive ? "invert" : ""}`}
        />
      )}
    </button>
  );
};

export default Btn;
