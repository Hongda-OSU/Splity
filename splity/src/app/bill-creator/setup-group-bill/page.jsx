"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormInput from "@/components/form-input/FormInput";
import dynamic from "next/dynamic";
import useAxios from "@/helper/useAxios";
import { create_bill } from "@/helper/api";
import { useMyStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { BackImage } from "@/helper/image";
import styles from "./setup-group-bill.module.css";

const Loading = dynamic(() => import("@/components/loading/Loading"), {
  ssr: false,
});

export default function SetupGroupBill() {
  const router = useRouter();
  const { billCreator, setBillCreator } = useMyStore((state) => ({
    billCreator: state.billCreator,
    setBillCreator: state.setBillCreator,
  }));
  const { loading, error, fetchData } = useAxios(create_bill, "POST");

  const [total_members, setTotalMembers] = useState("");
  const [bill_total, setBillTotal] = useState("");
  const [bill_description, setBillDescription] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const num_total_members = Number(total_members);
    const num_bill_total = Number(bill_total);

    setBillCreator({
      total_members: num_total_members,
      bill_total: num_bill_total,
      bill_description,
      password,
    });

    const data = await fetchData({
      total_members: num_total_members,
      bill_total: num_bill_total,
      bill_description,
      password,
      bill_creator: billCreator.bill_creator,
    });

    if (data) {
      setBillCreator({
        bill_id: data.bill_id,
        resume_code: data.resume_code,
        ttl: data.ttl,
      });
      router.push("/bill-creator/split-success");
    }
  };

  return (
    <main className="flex min-h-screen bg-black w-full">
      {loading && <Loading />}
      <div className="flex flex-col min-h-screen w-[430px] bg-white m-auto">
        <div className="relative flex justify-center items-center mt-10">
          <Link href="/bill-creator/payment">
            <Image
              src={BackImage}
              alt=""
              width={28}
              height={28}
              className={styles["back-image"]}
            />
          </Link>
          <h1 className={styles.header}>Setup Group Bill</h1>
        </div>
        <div className="flex flex-col flex-grow p-8 mt-6" id={styles.wrapper}>
          <div>
            <h1 className="text-base font-bold text-black">
              Group Bill Information
            </h1>
            <p className="text-xs mb-4 text-slate-500">
              Splity will use these information to generate a group bill.
            </p>
          </div>
          <form
            className="flex flex-col flex-grow mt-4 text-black"
            onSubmit={handleSubmit}
          >
            <FormInput
              id="people"
              label="People"
              placeholder="Number of people"
              value={total_members}
              onChange={handleInputChange(setTotalMembers)}
            />
            <FormInput
              id="price"
              label="Price"
              placeholder="Total price"
              value={bill_total}
              onChange={handleInputChange(setBillTotal)}
            />
            <FormInput
              id="bill-description"
              label="Bill Description"
              placeholder="Bill description"
              value={bill_description}
              onChange={handleInputChange(setBillDescription)}
            />
            <FormInput
              id="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange(setPassword)}
            />
            <button className={styles.button} type="submit" disabled={loading}>
              <span className={styles["button-text"]}>Let&apos;s Splity</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
