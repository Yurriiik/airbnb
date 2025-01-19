import { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./style.scss";

const Modal = ({ isOpen, onClose }) => {
  const [activeFields, setActiveFields] = useState({
    name: false,
    email: false,
    phone: false,
    date: false,
    days: false,
  });

  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose(); // Закриваємо модальне вікно при натисканні Escape
      }
    };

    // Додаємо обробник події на Escape
    window.addEventListener("keydown", handleEscapeKey);

    // Очищаємо обробник при розмонтажі компонента
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    // Перевіряємо, чи всі поля заповнені
    const allFieldsFilled = Object.values(activeFields).every(Boolean);
    setIsButtonActive(allFieldsFilled);
  }, [activeFields]);

  const handleFocus = (field) => {
    setActiveFields({ ...activeFields, [field]: true });
  };

  const handleBlur = (field, value) => {
    setActiveFields({ ...activeFields, [field]: !!value });
  };

  const handleButtonFocus = () => {
    setIsButtonActive(true);
  };

  const handleButtonBlur = () => {
    setIsButtonActive(false);
  };

  const handleCloseModal = (e) => {
    // Якщо натискаємо на область поза модальним вікном, закриваємо його
    if (e.target.classList.contains("container")) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="container" onClick={handleCloseModal}>
          <div className="modal">
            <div className="modal__wrapper">
              <div className="modal__content">
                <h1 className="modal__content-title">Real estate reservation</h1>
                <form className="modal__content-form">
                  <input
                    type="text"
                    className={`modal__content-input ${
                      activeFields.name ? "modal__content-input--active" : ""
                    }`}
                    placeholder="The name of the reservationist"
                    onFocus={() => handleFocus("name")}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                  />
                  <input
                    type="email"
                    className={`modal__content-input ${
                      activeFields.email ? "modal__content-input--active" : ""
                    }`}
                    placeholder="Email"
                    onFocus={() => handleFocus("email")}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                  />
                  <input
                    type="tel"
                    className={`modal__content-input ${
                      activeFields.phone ? "modal__content-input--active" : ""
                    }`}
                    placeholder="Phone number"
                    onFocus={() => handleFocus("phone")}
                    onBlur={(e) => handleBlur("phone", e.target.value)}
                  />
                  <Dropdown />
                  <input
                    type="date"
                    className={`modal__content-input ${
                      activeFields.date ? "modal__content-input--active" : ""
                    }`}
                    placeholder="Date"
                    onFocus={() => handleFocus("date")}
                    onBlur={(e) => handleBlur("date", e.target.value)}
                  />
                  <input
                    type="number"
                    className={`modal__content-input ${
                      activeFields.days ? "modal__content-input--active" : ""
                    }`}
                    placeholder="Number of days"
                    onFocus={() => handleFocus("days")}
                    onBlur={(e) => handleBlur("days", e.target.value)}
                  />
                </form>
                <div className="modal__content-btn">
                  <button
                    className={`modal__content-button ${
                      isButtonActive ? "modal__content-button--active" : ""
                    }`}
                    onFocus={handleButtonFocus}
                    onBlur={handleButtonBlur}
                    disabled={!isButtonActive} 
                    onClick={onClose} 
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
