import Image from "next/image";
import { CashImage } from "@/helper/image";
import "./PreviewItem.css";

const PreviewItem = () => {
  return (
    <div className="preview-item">
      <Image src={CashImage} alt="" className="preview-image" priority={true} />
      <p className="preview-text">Hongda Lin</p>
      <p className="preview-text">$20</p>
    </div>
  );
};

export default PreviewItem;
