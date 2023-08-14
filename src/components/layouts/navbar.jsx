import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BiNotepad } from "react-icons/bi";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavbarDefault() {
  // for dark mode
  const { theme, setTheme } = useTheme();
  // for toggle
  const [isShow, setIsShow] = useState(false);

  const iconToggle = () => {
    if (!isShow)
      return <RxHamburgerMenu size={25} className="dark:text-white" />;

    return <RxCross1 size={25} />;
  };
  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/" className="flex items-center">
          <BiNotepad size={25} className="dark:text-white" />
          <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Absensi Mobile
          </span>
        </Link>
        <div className="flex gap-2 items-center lg:order-2">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <input
              class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsShow(!isShow)}
          >
            <span className="sr-only">Open main menu</span>
            {iconToggle()}
          </button>
        </div>
        <div
          className={`${
            !isShow && "hidden"
          } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/products"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href="/my-account"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
