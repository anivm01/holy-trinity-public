import { CloseIcon } from "../../../assets/svg";
import "./Modal.scss";

const Modal = ({ visible, setVisible, children }) => {
  return (
    <div className="modal">
      {visible ? (
        <div className="modal__overlay">
          <div className="modal__container">
            <button className="modal__close" onClick={() => setVisible(false)}>
              <CloseIcon className="modal__x" />
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
