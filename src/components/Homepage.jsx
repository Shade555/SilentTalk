"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Import your homepage sections
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

export default function HomePageWrapper() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [shouldShowPage, setShouldShowPage] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      setShouldShowPage(true);
    }
  }, [isLoaded, isSignedIn]);

  if (!shouldShowPage) return null; // Prevent flicker

  return (
    <section className="h-auto ">
      <div id="home" className="h-screen  bg-cover">
        <div className=" bg-[url(/asset/bgwaves.png)] w-full min-h-[1000px] bg-cover bg-center">
          <div className="container mx-auto h-full ">
            <div className="flex  flex-col-reverse xl:flex-row items-center justify-between pt-12 xl:pb-24">
              <div className="text-center xl:text-left">
                <h1 className="h1 capitalize">
                  Learn <span className="text-accent1">ASL</span>
                  <br /> The fun way
                </h1>
                <h3 className="h3 text-gray-400 pt-4 max-w-[500px] xl:max-w-[700px]  xl:w-full text-wrap">
                  Master sign language step by step. Learn, practice, and
                  confidently grow your ASL skills through an engaging and
                  natural learning experience.
                </h3>
                <div className="pt-8">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="px-4 py-2 h2 bg-foreground text-secondary   rounded-4xl hover:bg-linear-to-r from-black/50 via-[var(#063731)] to-foreground  hover:outline-solid outline-background/50">
                        Start Learning Now !
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
              <Photo />
            </div>
          </div>
        </div>

        <Features />
        <Testimonials />
      </div>
    </section>
  );
}
