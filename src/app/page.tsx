import Image from "next/image";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <Banner />
    </div>
  );
}
