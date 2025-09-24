"use client";
import Link from "next/link";
import { Button } from "./ui/Button";
import Nav from "./Nav";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useUser, useSignIn } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  const { openSignIn } = useSignIn();
  return (
    <header className=" px-4 py-4 lg:py-8  text-red-50 ">
      <div className="mx-auto flex container justify-between items-center">
        <Link href="/" className="font-header font-bold text-3xl">
          Silent<span className="text-accent2 font-bold">Talk</span>
        </Link>
        {/* desktop nav and Sign up button*/}
        <div className="hidden xl:flex items-center place-item-center gap-8 ">
          <Nav />

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
        {/**Mobile nav */}
        <div className="xl:hidden">
          <Nav />
        </div>
      </div>
    </header>
  );
};
export default Header;
