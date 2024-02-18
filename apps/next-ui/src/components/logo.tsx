import { GearIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="flex gap-2 items-center"
      href={"/"}
    >
      <GearIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      <span className="font-bold">FS ASSIGNMENT UI</span>
    </Link>
  )
}
