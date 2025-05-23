"use client"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <nav className="wrapper md:grid md:grid-cols-3 justify-between items-center py-4 hidden">
        
        <Link href="/dashboard"><Image src="/logo.gif" width={48} height={48} alt="logo" className="w-24"/></Link>
        <ul className="flex gap-8 flex-1/2">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/travel-logs'>Travel Logs</Link></li>
          <li><Link href='#packages'>Trip Planner</Link></li>
          <li><Link href='#adventures'>Destinations</Link></li>
        </ul>
        <div className="flex gap-3 justify-end">
          <ModeToggle/>
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
        <Link href="/dashboard"><Image src="/logo.gif" width={48} height={48} alt="logo" className="w-24"/></Link>
        
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
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/travel-logs'>Travel Logs</Link></li>
            <li><Link href='#packages'>Trip Planner</Link></li>
            <li><Link href='#adventures'>Destinations</Link></li>
          </ul>
          <div className="flex flex-col gap-3">
            <ModeToggle/>
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
