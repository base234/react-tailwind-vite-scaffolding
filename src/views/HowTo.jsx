import { Link } from "react-router-dom";

import REACT_LOGO from "@assets/react.svg";
import VITE_LOGO from "@assets/vite.svg";
import TAILWINDCSS_LOGO from "@assets/tailwindcss.svg";

import IMG_IMPORT_PATH_HELL from "@assets/import_path_hell.svg";
import IMG_CLEAN_IMPORT from "@assets/clean_import.svg";

export default function HowTo() {
  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center">How to</h1>
        <div className="flex items-center justify-between gap-4">
          <img className="w-8 mx-auto" src={VITE_LOGO} alt="vite-logo" />
          <i className="fa-solid fa-plus fa-fw"></i>
          <img className="w-8 mx-auto" src={REACT_LOGO} alt="react-logo" />
          <i className="fa-solid fa-plus fa-fw"></i>
          <img
            className="w-8 mx-auto"
            src={TAILWINDCSS_LOGO}
            alt="tailwind-logo"
          />
        </div>
      </div>
      <p className="mt-2">
        <code className="py-1 bg-gray-200">src/views/HowTo.jsx</code>
      </p>

      <div className="mt-8 mb-12">
        <h1 className="text-xl font-bold">Import path hell</h1>
        <p className="mt-2 text-gray-600">
          As the project evolves to become larger, it begin to have more files
          with increasing folder depth.
        </p>

        <img className="w-full h-auto" src={IMG_IMPORT_PATH_HELL} />

        <p className="mt-2 text-gray-600">
          These are <strong>relative imports</strong>.
        </p>
        <p className="mt-2 text-gray-600">
          As the folder depth increases, it is hard to work with imports. This
          is known as <strong>import path hell.</strong>
        </p>

        <div className="my-10">
          <h1 className="text-xl font-bold">Avoiding import path hell</h1>
          <p className="mt-6 text-gray-600">
            There are pre-defined paths in this scaffolding in order to reduce
            the headache of import paths.
          </p>

          <p className="mt-6 text-gray-600">Such as:</p>
          <p className="my-4">
            <code className="bg-gray-200">
              import <span className="text-pink-600">Footer</span> from
              "../components/Footer.jsx"
            </code>
          </p>

          <p className="text-gray-600">instead use</p>

          <p className="my-4">
            <code className="bg-gray-200">
              import <span className="text-pink-600">Footer</span> from
              "@components/Footer.jsx"
            </code>
          </p>

          <p className="mt-4 text-gray-600">
            This looks much better, cleaner and improves code readability.
          </p>
          <img className="w-full h-auto" src={IMG_CLEAN_IMPORT} />
        </div>
      </div>

      <div className="mt-10 mb-12">
        <h1 className="text-xl font-bold">Available imports</h1>

        <ul className="my-4 list-none list-outside space-y-2">
          <li>
            <strong>@</strong> -{" "}
            <span className="text-gray-600">
              {" "}
              access <code className="text-black bg-gray-200">
                {" "}
                src (root)
              </code>{" "}
              directory
            </span>
          </li>
          <li>
            <strong>@assets</strong> -{" "}
            <span className="text-gray-600">
              {" "}
              access <code className="text-black bg-gray-200">
                {" "}
                assets
              </code>{" "}
              directory
            </span>
          </li>
          <li>
            <strong>@components</strong> -{" "}
            <span className="text-gray-600">
              {" "}
              access <code className="text-black bg-gray-200">
                {" "}
                components
              </code>{" "}
              directory
            </span>
          </li>
          <li>
            <strong>@layouts</strong> -{" "}
            <span className="text-gray-600">
              {" "}
              access <code className="text-black bg-gray-200">
                {" "}
                layouts
              </code>{" "}
              directory
            </span>
          </li>
          <li>
            <strong>@views</strong> -{" "}
            <span className="text-gray-600">
              {" "}
              access <code className="text-black bg-gray-200"> views</code>{" "}
              directory
            </span>
          </li>
          <li>
            <strong>@contexts</strong> -{" "}
            <span className="text-gray-600">
              {" "}
              access <code className="text-black bg-gray-200"> views</code>{" "}
              directory
            </span>
          </li>
        </ul>

        <p className="mt-6 text-gray-600">
          You can change as per your need by modifying the alias in &nbsp;
          <code className="text-black bg-gray-200">vite.config.js</code>
        </p>
      </div>

      <div className="my-20 flex justify-center gap-4">
        <Link
          to="/"
          className="py-2 px-4 text-center no-underline text-pink-400 border border-pink-200 hover:border-pink-300 hover:bg-pink-50 shadow-sm hover:shadow rounded-md duration-200"
        >
          <i className="fa-solid fa-home fa-fw fa-lg"></i>
        </Link>
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
