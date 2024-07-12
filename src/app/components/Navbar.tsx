import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/assets/images/Logo.png";
import User from "../../../public/assets/images/user.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo}
            className="h-8"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full"
              src={User}
              alt="user photo"
              width={32}
              height={32}
            />
          </button>
          {/* Dropdown menu */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm  dark:text-white">
                Muhammad Shameel
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                mshameelkz@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   dark:hover:text-white"
                  href="#"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   dark:hover:text-white"
                  href="#"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   dark:hover:text-white"
                  href="#"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   dark:hover:text-white"
                  href="#"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white   ">
            <li>
              <Link
                href="#"
                className="hover-underline-animation block py-2 px-3  rounded md:bg-transparent  md:p-0 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover-underline-animation block py-2 px-3  rounded   md:p-0   "
                href="#"
              >
                Exercise
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
