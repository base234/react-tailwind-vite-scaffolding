import { Link } from "react-router-dom";

import REACT_LOGO from "@assets/react.svg";
import VITE_LOGO from "@assets/vite.svg";
import TAILWINDCSS_LOGO from "@assets/tailwindcss.svg";

export default function Home() {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center">
        Vite + React + Tailwind CSS
      </h1>
      <p className="mt-2 text-center">
        <code className="py-1 bg-gray-200">src/views/Home.jsx</code>
      </p>
      <div className="w-96 my-10 mx-auto flex items-center justify-between gap-4">
        <img className="w-12 mx-auto" src={VITE_LOGO} alt="vite-logo" />
        <i className="fa-solid fa-plus fa-fw"></i>
        <img className="w-12 mx-auto" src={REACT_LOGO} alt="react-logo" />
        <i className="fa-solid fa-plus fa-fw"></i>
        <img
          className="w-12 mx-auto"
          src={TAILWINDCSS_LOGO}
          alt="tailwind-logo"
        />
      </div>
      <div className="flex justify-center gap-4">
        <Link
          to="/about"
          className="py-2 px-4 text-center no-underline text-pink-400 border border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-sm hover:shadow rounded-md duration-200"
        >
          <i className="fa-solid fa-info-circle fa-fw fa-lg"></i>
        </Link>
        <Link
          to="/how-to"
          className="py-2 px-4 text-center no-underline text-pink-400 border border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-sm hover:shadow rounded-md duration-200"
        >
          <i className="fa-solid fa-gears fa-fw fa-lg"></i>
        </Link>
      </div>
    </div>
  );
}
