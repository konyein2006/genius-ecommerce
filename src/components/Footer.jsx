import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-zinc-200 dark:bg-zinc-950 ">
      <div className="max-w-4xl flex flex-col md:flex-row  justify-between items-start gap-3 p-5 md:my-3 mx-auto">
        <div
          className="flex items-start gap-2 text-gray-700 dark:text-gray-400
        "
        >
          <FaRegCopyright className="text-sm mt-1.5" />
          <p className="font-bold text-base md:text-base">
            2026 GENIUS E-Commerce, Inc. <br className="sm:hidden" /> All rights
            reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <p className="cursor-pointer hover:scale-105 text-base font-medium">
            Terms & Conditions
          </p>
          <p className="cursor-pointer hover:scale-105 text-base font-medium">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
