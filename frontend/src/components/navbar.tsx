"use client"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <nav className="wrapper md:flex justify-between items-center py-4 hidden">
        <h1 className="font-black text-lg">Compas.</h1>
        <ul className="flex gap-3">
          <li><Link href='/destinations'>Destinations</Link></li>
          <li><Link href='/travel-logs'>Travel Logs</Link></li>
        </ul>
        <div className="flex gap-3">
          <Link href='/auth/login'>
            <Button className="cursor-pointer">
              Sign In
            </Button>
          </Link>
          <Link href='/auth/signup'>
            <Button variant="outline" className="cursor-pointer">
              Create an Account
            </Button>
          </Link>
        </div>
      </nav>
      <nav className="wrapper md:hidden flex justify-between items-center py-4">
        <h1 className="font-black text-lg">Compas.</h1>
        
        {/* Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Sliding Menu */}
        <div 
          className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col pt-20 px-6`}
        >
          <ul className="flex flex-col gap-6 mb-8">
            <li><Link href='/destinations' className="text-lg" onClick={toggleMenu}>Destinations</Link></li>
            <li><Link href='/travel-logs' className="text-lg" onClick={toggleMenu}>Travel Logs</Link></li>
          </ul>
          <div className="flex flex-col gap-3">
            <Link href='/auth/login'>
              <Button className="cursor-pointer" onClick={toggleMenu}>
                Sign In
              </Button>
            </Link>
            <Link href='/auth/signup'>
              <Button variant="outline" className="cursor-pointer" onClick={toggleMenu}>
                Create an Account
              </Button>
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
  )
}
