import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="p-4 bg-slate-400 hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to="/bg-changer"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
              }
            >
              BgChanger
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/currency"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
              }
            >
              Currency
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/text-generator"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
              }
            >
              Random Text Generator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layout"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
              }
            >
              Pages
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default App;
