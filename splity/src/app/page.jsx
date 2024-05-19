"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ResumeAuth from "@/components/resume-auth/ResumeAuth";
import Authenticator from "@/components/authenticator/Authenticator";
import { IconImage, PartyFaceImage } from "@/helper/image";
import styles from "./home.module.css";

export default function Home() {
  const [authenticator, setAuthenticator] = useState(false);
  const [resumeAuth, setResumeAuth] = useState(false);

  const buttons = () => {
    return (
      <div className="flex flex-col w-full">
        <Link href="/bill-creator/payment">
          <button className={styles.button}>
            <span className={styles["button-text"]}>Split a bill</span>
          </button>
        </Link>
        <button className={styles.button} onClick={() => setAuthenticator(true)}>
          <span className={styles["button-text"]}>Join a bill</span>
        </button>
        <button className={styles.button} onClick={() => setResumeAuth(true)}>
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
                  width={30}
                  height={30}
                  className="object-contain mr-3"
                />
                <h1 className="text-3xl font-bold">Splity</h1>
              </section>
              <section className="flex flex-row">
                <p className="mt-3 text-xl">
                  Split bills in a snap with friends
                </p>
                <Image
                  src={PartyFaceImage}
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover"
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
