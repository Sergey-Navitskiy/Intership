import { useState } from "react";
import "./ToggleText.css";
export function ToggleText() {
  const [isVisible, seIsVisible] = useState(false);

  const handleToggle = () => {
    seIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="toggle-container">
      <button onClick={handleToggle}>
        {isVisible ? "hide text" : "show text"}
      </button>
      {`${isVisible ? "hide" : "show"} text`}
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          natus perspiciatis veniam quis fuga optio alias, soluta doloribus in
          dicta magnam voluptas velit explicabo ipsa quidem ipsum nemo facere
          praesentium.
        </p>
      )}
    </div>
  );
}
