"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-pink-300 flex justify-between border-b-black border-b-2 h-16">
      <div className="my-[auto]">
        <a href="/">
          <img
            src="https://w7.pngwing.com/pngs/898/590/png-transparent-newspaper-mobile-app-mailonline-android-news-files-free-miscellaneous-text-logo.png"
            alt="1"
            className="h-16 border-b-2 border-black mix-blend-multiply z-10"
          ></img>
        </a>
      </div>
      <div className="my-[auto]">
        <ul className="flex">
          <li className="p-2 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2 hover:underline">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
