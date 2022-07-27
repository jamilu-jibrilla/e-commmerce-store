import { useState } from "react";

const Dropdown = () => {
  let [showNav, setShowNav] = useState(false);
  const handeleDisplay = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div className="dropdown relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex  text-white hover:text-[#ffc800]  text-sm font-medium     "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handeleDisplay}
        >
          Pages
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={` ${
          showNav ? "" : "none"
        } origin-top-right absolute left-0 mt-5 w-40 pages  shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <div role="none">
          <a
            href="/"
            className="text-black hover:bg-white  block px-4 py-2 text-sm"
            style={{ color: "black" }}
          >
            Shopping Cart
          </a>
          <a
            href="/"
            className="text-black hover:bg-white bg block px-4 py-2 text-sm"
            style={{ color: "black" }}
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
