"use client";
import Link from "next/link";


const Headerfordash = () => {
  return (
    <header className=" px-4 py-4 lg:py-6  text-red-50 ">
      <nav className="mx-auto flex  container justify-between items-center">
        <div className="font-header font-bold text-3xl">
          Silent<span className="text-accent2 font-bold">Talk</span>
        </div>
        {/**Desktop nav */}
        <div className="hidden xl:flex items-center place-item-center gap-8 text-color-secondary font-description">
          <Link href="/dashboard" className="hover:text-green-950 font-medium">
            Dashboard
          </Link>
          <Link href="/dictionary" className="hover:text-green-950 font-medium">
            Dictionary
          </Link>
           <Link href="/progress" className="hover:text-green-950 font-medium">
            Progress
          </Link>
        </div>

      </nav>
    </header>
  );
};
export default Headerfordash;
