import Image from "next/image";

import MobileSidebar from "./MobileSidebar";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <Link href={"https://linkedin.com/in/sahilsz"} target="_blank">
          <div className=" w-8 h-8 relative cursor-pointer">
            <Image fill alt="profile" src="/favicon.ico" title="Click Me" />
          </div>
        </Link>
      </div>
    </div>
  );
}
