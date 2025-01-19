import { useState } from "react";
import "./style.scss";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value, label) => {
    setSelectedValue(label);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className={`dropdown__button ${
          isOpen || selectedValue ? "dropdown__button--active" : ""
        }`}
        type="button"
        onClick={toggleDropdown}
      >
        {selectedValue || "Number of people"}
        <span
          className={`dropdown__arrow ${isOpen ? "dropdown__arrow--up" : ""}`}
        ></span>
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          <li
            className="dropdown__list-item"
            onClick={() => handleSelect("1-4", "1-4 people")}
          >
            1-4 people
          </li>
          <li
            className="dropdown__list-item"
            onClick={() => handleSelect("4-8", "4-8 people")}
          >
            4-8 people
          </li>
          <li
            className="dropdown__list-item"
            onClick={() => handleSelect("8-12", "8-12 people")}
          >
            8-12 people
          </li>
          <li
            className="dropdown__list-item"
            onClick={() => handleSelect("12+", "12+ people")}
          >
            12+ people
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

