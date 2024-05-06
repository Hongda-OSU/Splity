import Image from "next/image";
import Link from "next/link";
import styles from "./preview-payer.module.css";
import PreviewPayerImage from "../../../public/images/Becoming-Rich.png";
import AvatarImage from "../../../public/images/avatar.png";
import DotsImage from "../../../public/images/dots.png";

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
            {[...Array(6)].map((_, key) => (
              <div key={key} className={styles["preview-item"]}>
                <Image
                  src={AvatarImage}
                  alt=""
                  priority={true}
                  className={styles.image}
                />
                <p className={styles.text}>Hongda Lin</p>
                <Image
                  src={DotsImage}
                  alt=""
                  priority={true}
                  className={styles.dots}
                />
              </div>
            ))}
          </div>
          <Link href="/" className={styles.link}>
            <button className={styles.button}>
              <span>Return</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewPayer;
