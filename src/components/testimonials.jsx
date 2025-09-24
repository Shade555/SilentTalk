"use client";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const testimonials = () => {
  return (
    <section
      id="testimonials"
      className="h-screen  items-center justify-center  bg-background "
    >
      <div className="bg-[url(/asset/bgwaves.png)] bg-no-repeat w-full h-auto bg-cover flex flex-col items-center bg-center">
        <h2 className="text-6xl font-bold font-header text-center text-foreground pt-24">
          Testimonials
        </h2>

        <div className="pt-24 pb-96 relative grid gap-8 px-12 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
  {/* Card 1 */}
  <div className="bg-gradient-to-r from-[#063731] to-[#063731]/50 rounded-xl shadow-md p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center hover:ring-2 hover:ring-[#0f766e] hover:ring-opacity-40">
    <img
      src="https://randomuser.me/api/portraits/women/31.jpg"
      alt="User"
      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-no bg-blend-overlay"
    />
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5 text-yellow-400"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.684a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.684c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.2-3.684a1 1 0 00-.364-1.118L2.45 9.11c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.684z" />
        </svg>
      ))}
    </div>
    <p className="text-red-50 text-sm mb-4 italic">
      “Learning sign language here has been a life-changing experience. The lessons were easy to follow, and I now feel confident communicating with the Deaf community.”
    </p>
    <p className="font-semibold text-red-100">Alex Johnson</p>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-r from-[#063731] to-[#063731]/50 rounded-xl shadow-md p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center hover:ring-2 hover:ring-[#0f766e] hover:ring-opacity-40">
    <img
      src="https://randomuser.me/api/portraits/men/33.jpg"
      alt="User"
      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-no bg-blend-overlay"
    />
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5 text-yellow-400"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.684a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.684c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.2-3.684a1 1 0 00-.364-1.118L2.45 9.11c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.684z" />
        </svg>
      ))}
    </div>
    <p className="text-red-50 text-sm mb-4 italic">
    “As a teacher, I wanted to include more inclusive practices in my classroom. This platform gave me the tools and confidence to do just that. Highly recommended!”
  </p>
    <p className="font-semibold text-red-100">Daniel Lee</p>
  </div>

  {/* Card 3 */}
  <div className="bg-gradient-to-r from-[#063731] to-[#063731]/50 rounded-xl shadow-md p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center hover:ring-2 hover:ring-[#0f766e] hover:ring-opacity-40">
    <img
      src="https://randomuser.me/api/portraits/women/34.jpg"
      alt="User"
      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-no bg-blend-overlay"
    />
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="w-5 h-5 text-yellow-400"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.684a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.684c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.2-3.684a1 1 0 00-.364-1.118L2.45 9.11c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.684z" />
        </svg>
      ))}
    </div>
    <p className="text-red-50 text-sm mb-4 italic">
    “The visual approach and real-life practice examples made learning sign language both fun and practical. I loved how engaging and supportive the instructors were.”
    </p>
    <p className="font-semibold text-red-100">Samantha Rivera</p>
  </div>
</div>

      </div>
      {/* Call to Action Section */}
      <div className="mt-20 min-h-screen w-full flex flex-col items-center justify-center text-yellow-50 bg-linear-to-r/hsl from-[#063731] to-[#3DDC97] ">
        <div className="text-3xl text-center font-description mb-4">
          Let the learning begin!
        </div>
        <div className="text-6xl bg-[length:200%_100%] text-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0D1B2A] via-[#063731] to-white text-center font-header mb-12 max-w-4xl px-4 animate-[textShine_5s_linear_infinite]">
          Master Sign Language — take one sign at a time.
        </div>
        <div className="pt-24">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-8 py-4 w-full rounded-xl text-3xl font-header text-white bg-gradient-to-r from-[#0D1B2A] to-[#063731] hover:opacity-90 transition">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <div className="mt-20 w-full flex flex-col items-center justify-center text-red-50 bg-gradient-to-r from-[#063731] to-[#3DDC97] py-8 text-sm">
        <p>
          &copy; {new Date().getFullYear()} YourCompanyName. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-2">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="mt-2 text-xs">Made with ❤️ by SilentTalk</p>
      </div>
    </section>
  );
};

export default testimonials;
