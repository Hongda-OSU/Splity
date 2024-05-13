import Image from "next/image";
import Link from "next/link";
import BackImage from "../../../public/images/back.png";
import AvatarImage from "../../../public/images/avatar.png";

const formatDate = (date) => {
  const months = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
    "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.",
  ];
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  const formattedTime = `${month} ${day}, ${year} - ${hour}:${minute < 10 ? "0" + minute : minute} ${ampm}`;
  return formattedTime;
};

export default function Confirmation() {
  const getCurrentFormattedTime = () => formatDate(new Date());

  return (
    <section className="flex justify-center items-center bg-black">
      <main className="flex flex-col w-[430px] h-[932px] bg-white px-10 py-10">
        <div className="flex items-center justify-between">
          <Link href="/payment2">
            <button className="p-2">
              <Image src={BackImage} alt="Back" width={24} height={24} />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-center">
            Confirm Payment
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow gap-6">
          <Image
            src={AvatarImage}
            alt="Profile avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
          <p className="text-lg font-semibold">Hongda Lin</p>
          <p className="text-3xl font-semibold">$20.00</p>
          <p className="text-gray-500">for “Tuesday lunch”</p>
          <p className="text-sm text-gray-400">{getCurrentFormattedTime()}</p>
          <Link href="/payment-success">
            <button className="w-60 bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800">
              Confirm Payment
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
}
