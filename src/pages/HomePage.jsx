import { NavLink } from "react-router-dom";
import TextRotate from "../components/TextRotate";
import photoProfil from "../assets/images/duotone.jpg";
import up from "../assets/icon/up.svg";
import down from "../assets/icon/down.svg";
import cv from "../assets/data/CVYannDuhamel.pdf";

export default function HomePage() {
  return (
    <main className="mx-8">
      <section
        className="h-[87svh] w-[80svw] mx-auto flex flex-col items-center justify-evenly text-center"
        id="landing"
      >
        <div className=" flex flex-col items-center relative text-center">
          <img
            src={photoProfil}
            alt="photo de profil"
            className="max-h-[40svh] rounded-full mx-auto"
          />
          <h1 className="font-migra text-7xl absolute bottom-[-9%]">
            Bonjour!
          </h1>
        </div>
        <div>
          <h2 className="text-3xl">
            Je suis <span className="font-bold text-saffron">Yann</span>,
            développeur web installé en{" "}
            <span className="font-bold text-saffron">Bretagne</span>
          </h2>
        </div>
        <div>
          <button className=" mr-1 p-4 border-2 border-solid border-white rounded-full hover:border-saffron hover:text-saffron hover:font-bold">
            <NavLink to="/projets">Mes projets</NavLink>
          </button>
          <button className=" ml-1 p-4 border-2 border-solid border-white rounded-full hover:border-saffron hover:text-saffron hover:font-bold">
            <NavLink to="/contact">Contacte moi</NavLink>
          </button>
        </div>
        <div>
          <button className="w-12 h-12 border-2 border-solid border-white rounded-full flex justify-center items-center hover:border-saffron">
            <a href="#first-section">
              <img
                src={down}
                alt="Lien d'ancrage descendant"
                className="max-h-7"
              />
            </a>
          </button>
        </div>
      </section>
      <section
        className="h-[100svh] lg:h-[100svh] w-[80svw] lg:w-[60vw] mx-auto flex flex-col items-center justify-around"
        id="first-section"
      >
        <div className="flex flex-col items-center ">
          <p className="text-2xl">
            Mon parcours m&apos;a fait passer par le marketing, le graphisme et
            la menuiserie mais c&apos;est dans la création de site web que je
            m&apos;épanouis aujourd&apos;hui! J&apos;y utilise:
          </p>
          <TextRotate />
          <button className="mt-8 p-4 border-2 border-solid border-white rounded-full hover:border-saffron hover:text-saffron hover:font-bold">
            <NavLink to={cv} target="_blank" download>
              Mon curriculum vitae
            </NavLink>
          </button>
        </div>

        <div>
          <button className="w-12 h-12 border-2 border-solid border-white rounded-full flex justify-center items-center hover:border-saffron">
            <a href="#second-section">
              <img
                src={down}
                alt="Lien d'ancrage descendant"
                className="max-h-7"
              />
            </a>
          </button>
        </div>
      </section>
      <section
        className="h-[100svh] lg:h-[80svh] w-[80svw] lg:w-[60vw] mx-auto flex flex-col items-center justify-evenly"
        id="second-section"
      >
        <div className=" flex flex-col items-center relative ">
          <p className="text-2xl">
            Passionné par les arts graphiques et l&apos;architecture brutaliste,
            je cherche à intégrer une dimension{" "}
            <span className="font-bold text-saffron">créative</span> et{" "}
            <span className="font-bold text-saffron">esthétique</span> aux
            projets sur lesquels je travaille.
          </p>
        </div>
        <div>
          <button className="w-12 h-12 border-2 border-solid border-white rounded-full flex justify-center items-center hover:border-saffron">
            <a href="#landing">
              <img
                src={up}
                alt="Lien d'ancrage ascendant"
                className="max-h-7"
              />
            </a>
          </button>
        </div>
      </section>
    </main>
  );
}
