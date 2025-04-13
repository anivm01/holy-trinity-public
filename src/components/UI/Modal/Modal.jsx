import { useEffect, useRef } from "react";
import { CloseIcon } from "../../../assets/svg";
import "./Modal.scss";

const Modal = ({ visible, setVisible, children }) => {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, setVisible]);

  // Close on click outside
  const handleClickOutside = (e) => {
    if (
      overlayRef.current &&
      containerRef.current &&
      !containerRef.current.contains(e.target)
    ) {
      setVisible(false);
    }
  };

  return (
    <div className="modal">
      {visible && (
        <div
          className="modal__overlay"
          ref={overlayRef}
          onClick={handleClickOutside}
        >
          <div className="modal__container" ref={containerRef}>
            <button className="modal__close" onClick={() => setVisible(false)}>
              <CloseIcon className="modal__x" />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
