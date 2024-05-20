import ReactDOM from "react-dom";
import "./ErrorModal.css";

const ErrorModal = ({ onClose, errorMessage }) => {
  return ReactDOM.createPortal(
    <div className="container">
      <div className="modal">
        <div className="modal-header">
          <p className="warning">Warning</p>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="modal-content">
          <p className="content">{errorMessage}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ErrorModal;
