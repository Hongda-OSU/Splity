"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Authenticator from "@/components/authenticator/Authenticator";
import {
  IconImage,
  BurgerImage,
  CreditCardImage,
  PartyFaceImage,
} from "@/helper/image";
import styles from "./home.module.css";

export default function Home() {
  const [authenticator, setAuthenticator] = useState(false);

  return (
    <main className="flex min-h-screen">
      <div className="relative w-full bg-white">
        <div className="flex min-h-screen flex-col bg-black text-white w-[430px] p-20 px-10 m-auto">
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
            {authenticator ? (
              <Authenticator back={() => setAuthenticator(false)} />
            ) : (
              <div className="flex flex-col w-full">
                <Link href="/bill-creator/payment">
                  <button className={styles.button}>
                    <Image
                      src={BurgerImage}
                      alt=""
                      width="auto"
                      height="auto"
                      className={styles["button-icon"]}
                    />
                    <span className={styles["button-text"]}>Start a Split</span>
                  </button>
                </Link>
                <button
                  className={styles.button}
                  onClick={() => setAuthenticator(true)}
                >
                  <Image
                    src={CreditCardImage}
                    alt=""
                    width="auto"
                    height="auto"
                    className={styles["button-icon"]}
                  />
                  <span className={styles["button-text"]}>Join a Bill</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
