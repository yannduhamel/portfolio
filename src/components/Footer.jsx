import { NavLink } from "react-router-dom";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <ul className="w-32 flex justify-evenly p-4 my-4 gap-4 border-2 border-solid border-white rounded-full font-inter hover:border-saffron">
          <li>
            <NavLink
              to="https://www.linkedin.com/in/yannduhamel/"
              target="_blank"
            >
              <img src={linkedin} alt="logo LinkedIn" className="max-h-6" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={github} alt="logo Github" className="max-h-6" />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
