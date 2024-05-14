import Image from "next/image";
import Link from "next/link";
import styles from "./preview-payer.module.css";
import { PreviewPayerImage } from "@/helper/image";
import PreviewItem from "@/components/preview-item/PreviewItem";

const PreviewPayer = () => {
  return (
    <section className={styles.container}>
      <div id={styles["preview-payer"]}>
        <div className={styles.wrapper}>
          <Image
            src={PreviewPayerImage}
            alt=""
            priority={true}
            className={styles.image1}
          />
          <p className={styles.text1}>Who has paid ?</p>
          <p className={styles.text2}>Theses people have paid your bill</p>
          <div className={styles["preview-container"]}>
            <PreviewItem />
          </div>
          <p className={styles["receive-total"]}>
            You have received $20 from your friends
          </p>
          <Link href="/" className={styles.link}>
            <button className={styles.button}>
              <span className={styles["button-text"]}>Return</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewPayer;
