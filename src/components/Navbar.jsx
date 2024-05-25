import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center">
        <ul className="w-72 flex justify-center p-4 mt-4 gap-4 border-2 border-solid border-white rounded-full font-inter hover:border-saffron">
          <li>
            <NavLink to="/presentation" className="hover:text-saffron">
              Présentation
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/projets" className="hover:text-saffron">
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-saffron">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
