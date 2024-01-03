import { Link } from "react-router-dom";

import VITE_LOGO from "@assets/vite.svg";
import REACT_LOGO from "@assets/react.svg";
import TAILWINDCSS_LOGO from "@assets/tailwindcss.svg";

export default function About() {
  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center">About</h1>
        <div className="flex items-center justify-between gap-4">
          <img className="w-8 mx-auto" src={VITE_LOGO} alt="vite-logo" />
          <i className="fa-solid fa-plus fa-fw"></i>
          <img className="w-8 mx-auto" src={REACT_LOGO} alt="react-logo" />
          <i className="fa-solid fa-plus fa-fw"></i>
          <img className="w-8 mx-auto" src={TAILWINDCSS_LOGO} alt="tailwind-logo" />
        </div>
      </div>
      <p className="mt-2">
        <code className="py-1 bg-gray-200">src/views/About.jsx</code>
      </p>

      <div className="mt-8 mb-12">
        <ul className="list-disc list-inside space-y-2">
          <li>
            This repo is a scaffolding of <strong>Vite</strong>,{" "}
            <strong>React</strong> and <strong>Tailwind CSS</strong>.
          </li>
          <li>
            Additional packages that includes <strong>React Router DOM</strong>{" "}
            and <strong>Axios</strong>.
          </li>
          <li>
            <strong>Font Awesome</strong> included in{" "}
            <code className="bg-gray-200">index.html</code>
          </li>
          <li>
            Font included: <strong>Inter</strong> (Free font for personal / commercial use).
          </li>
        </ul>
      </div>

      <Link
        to="/"
        className="py-2 px-4 text-center no-underline text-pink-400 border border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-sm hover:shadow rounded-md duration-200"
      >
        <i className="fa-solid fa-home fa-fw fa-lg"></i>
      </Link>
    </div>
  );
}
