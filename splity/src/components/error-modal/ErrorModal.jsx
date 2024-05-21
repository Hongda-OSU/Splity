import ReactDOM from "react-dom";
import { ErrorImage } from "@/helper/image";
import Image from "next/image";
import "./ErrorModal.css";

const ErrorModal = ({ onClose, errorMessage }) => {
  return ReactDOM.createPortal(
    <div className="error-modal">
      <div className="modal">
        <div className="modal-header">
          <p className="warning">Warning</p>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="error-image">
          <Image
            src={ErrorImage}
            alt="Error"
            width={70}
            height={125}
            layout="fixed"
          />
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
