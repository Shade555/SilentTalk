"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { SiDictionarydotcom } from "react-icons/si";
import { FaUser } from "react-icons/fa";

const BottomNavbar = () => {
    const pathname = usePathname();
    return (
        <section>
        <div className="fixed bottom-0 left-0 right-0   bg-black/60 border-t border-accent2 shadow-md z-50 backdrop-blur-md">
          <ul className="flex justify-around items-center h-16 text-sm">
            <li>
              <Link href="/dashboard">
                <div
                  className={`flex flex-col items-center ${
                    pathname === "/dashboard"
                      ? "text-accent2 font-bold"
                      : "text-accent2/40"
                  }`}
                >
                  <MdDashboard size={24} />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
    
            <li>
              <Link href="/dictionary">
                <div
                  className={`flex flex-col items-center ${
                    pathname === "/dictionary"
                      ? "text-accent2 font-bold"
                      : "text-accent2/40"
                  }`}
                >
                  <SiDictionarydotcom size={24} />
                  <span>Dictionary</span>
                </div>
              </Link>
            </li>
    
            <li>
              <Link href="/user">
                <div
                  className={`flex flex-col items-center ${
                    pathname === "/user"
                      ? "text-accent2 font-bold"
                      : "text-accent2/40"
                  }`}
                >
                  <FaUser size={24} />
                  <span>Profile</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="xl:visible hidden fixed  top-0 left-0 w-2xs h-full  bg-black/60 border-t border-accent2 shadow-md z-50 backdrop-blur-md">
        <ul className="flex flex-col justify-between items-left pl-4 space-y-10 h-36 text-2xl">
        <li>
            <div className=" text-foreground font-header font-bold text-3xl">Silent<span className="text-accent2 font-bold"> Talk</span></div></li>
            <li>
              <Link href="/dashboard">
                <div
                  className={`flex flex-row items-center ${
                    pathname === "/dashboard"
                      ? "text-accent2 font-bold"
                      : "text-accent2/40"
                  }`}
                >
                  <MdDashboard size={24} />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
    
            <li>
              <Link href="/dictionary">
                <div
                  className={`flex flex-row items-center ${
                    pathname === "/dictionary"
                      ? "text-accent2 font-bold"
                      : "text-accent2/40"
                  }`}
                >
                  <SiDictionarydotcom size={24} />
                  <span>Dictionary</span>
                </div>
              </Link>
            </li>
    
            <li>
              <Link href="/user">
                <div
                  className={`flex flex-row items-center ${
                    pathname === "/user"
                      ? "text-accent2 font-bold"
                      : "text-accent2/40"
                  }`}
                >
                  <FaUser size={24} />
                  <span>Profile</span>
                </div>
              </Link>
            </li>
        </ul>
        </div>
        </section>
      );
}

export default BottomNavbar