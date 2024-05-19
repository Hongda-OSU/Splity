"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ResumeAuth from "@/components/resume-auth/ResumeAuth";
import Authenticator from "@/components/authenticator/Authenticator";
import { IconImage, PartyFaceImage } from "@/helper/image";
import AOS from 'aos';
import 'aos/dist/aos.css'
import styles from "./home.module.css";

export default function Home() {
  const [authenticator, setAuthenticator] = useState(false);
  const [resumeAuth, setResumeAuth] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 50 });
    AOS.refresh();
  }, []);

  const buttons = () => {
    return (
      <div className="flex flex-col w-full">
        <Link href="/bill-creator/payment">
          <button className={styles.button} data-aos="fade-up">
            <span className={styles["button-text"]}>Split a bill</span>
          </button>
        </Link>
        <button
          className={styles.button}
          onClick={() => setAuthenticator(true)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className={styles["button-text"]}>Join a bill</span>
        </button>
        <button
          className={styles.button}
          onClick={() => setResumeAuth(true)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className={styles["button-text"]}>Resume a bill</span>
        </button>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen">
      <div className="relative w-full bg-black">
        <div
          className="flex min-h-screen flex-col bg-black text-white w-[430px] p-20 px-9 m-auto"
          id={styles.container}
        >
          <div className="flex flex-grow flex-col justify-between w-full">
            <div>
              <section className="flex flex-row mb-4">
                <Image
                  src={IconImage}
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain mr-3"
                />
                <h1 className={styles.title}>Splity</h1>
              </section>
              <section className="flex flex-row">
                <p className={styles.subtitle}>
                  Split bills in a snap with friends
                </p>
                <Image
                  src={PartyFaceImage}
                  alt=""
                  width="auto"
                  height="auto"
                  className={styles.image}
                />
              </section>
            </div>
            {resumeAuth ? (
              <ResumeAuth back={() => setResumeAuth(false)} />
            ) : authenticator ? (
              <Authenticator back={() => setAuthenticator(false)} />
            ) : (
              buttons()
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
