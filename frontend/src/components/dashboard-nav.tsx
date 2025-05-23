"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="wrapper md:flex justify-between items-center py-4 hidden">
        <Link href="/dashboard"><Image src="/logo.gif" width={48} height={48} alt="logo" className="w-24"/></Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/dashboard">Travel Logs</Link>
          </li>
          <li>
            <Link href="/dashboard/create-travel">Trip Planner</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          <Link href="/auth/login">
            <Button className="cursor-pointer">Logout</Button>
          </Link>
        </div>
      </nav>
      <nav className="wrapper md:hidden flex justify-between items-center py-4">
        <Link href="/dashboard"><Image src="/logo.gif" width={48} height={48} alt="logo" className="w-24"/></Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col pt-20 px-6`}
        >
          <ul className="flex gap-3">
            <li>
              <Link href="/dashboard">Travel Logs</Link>
            </li>
            <li>
              <Link href="/dashboard/create-travel">Trip Planner</Link>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link href="/auth/login">
              <Button className="cursor-pointer">Logout</Button>
            </Link>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </>
  );
}
