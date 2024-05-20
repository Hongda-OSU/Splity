"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import useAxios from "@/helper/useAxios";
import { create_bill } from "@/helper/api";
import { useMyStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { BackImage } from "@/helper/image";
import styles from "./setup-group-bill.module.css";
import GroupForm from "@/components/group-form/GroupForm";

const Loading = dynamic(() => import("@/components/loading/Loading"), {
  ssr: false,
});

export default function SetupGroupBill() {
  const router = useRouter();
  const { billCreator, setBillCreator } = useMyStore((state) => ({
    billCreator: state.billCreator,
    setBillCreator: state.setBillCreator,
  }));
  const { loading, fetchData } = useAxios(create_bill, "POST");

  const [total_members, setTotalMembers] = useState("");
  const [bill_total, setBillTotal] = useState("");
  const [bill_description, setBillDescription] = useState("");
  const [password, setPassword] = useState("");

  // const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleInputChange = (fieldName, event) => {
    const { value } = event.target;
    switch (fieldName) {
      case "total_members":
        setTotalMembers(value);
        break;
      case "bill_total":
        setBillTotal(value);
        break;
      case "bill_description":
        setBillDescription(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

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
          <GroupForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            total_members={total_members}
            bill_total={bill_total}
            bill_description={bill_description}
            password={password}
            loading={loading}
          />
        </div>
      </div>
    </main>
  );
}
