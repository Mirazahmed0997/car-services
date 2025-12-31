import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navMenu = () => (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/blogs">Blogs</Link></li>
      <li><Link href="/contact">Contacts</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-50"
          >
            {navMenu()}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu()}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <button className="btn btn-outline">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
