import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
export function HeaderEditPage() {
  return (
    <div
      className="flex h-24 bg-[#282C3A] font-bold text-white text-2xl
           items-center pl-10"
    >
      <Link href={"/LandingPage"}>
        <IoReturnUpBack size={35} />
      </Link>
      <h1 className="uppercase pl-10">edit session.</h1>
    </div>
  );
}
