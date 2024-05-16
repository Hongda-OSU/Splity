import Image from "next/image";
import { CashImage } from "@/helper/image";
import "./PreviewItem.css";

const PreviewItem = ({ payer }) => {
  return (
    <div className="preview-item">
      <Image src={CashImage} alt="" className="preview-image" priority={true} />
      <p className="preview-text">{payer.payer}</p>
      <p className="preview-text">${payer.amount.toFixed(1)}</p>
    </div>
  );
};

export default PreviewItem;
