import { NavLink } from "react-router-dom";
import TextRotate from "../components/TextRotate";

export default function HomePage() {
  return (
    <main className="mx-8">
      <section
        className="h-[90svh] w-[80svw] mx-auto flex flex-col items-center justify-evenly text-center"
        id="landing"
      >
        <div className=" flex flex-col items-center relative text-center">
          <img
            src="../../public/images/duotone.jpg"
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
            <img src="../../public/down.svg" alt="" className="max-h-7" />
          </button>
        </div>
      </section>
      <section
        className="h-[100svh] w-[80svw] mx-auto flex flex-col items-center justify-around"
        id="landing"
      >
        <div className="flex flex-col items-center">
          <p className="text-2xl">
            Mon parcours m&apos;a fait passer par le marketing, le graphisme et
            la menuiserie mais c&apos;est dans la création de site web que je
            m&apos;épanoui aujourd&apos;hui! J&apos;y utilise:
          </p>
          <TextRotate />
          <button className="mt-8 p-4 border-2 border-solid border-white rounded-full hover:border-saffron hover:text-saffron hover:font-bold">
            <NavLink to="/contact">Mon curriculum vitae</NavLink>
          </button>
        </div>

        <div>
          <button className="w-12 h-12 border-2 border-solid border-white rounded-full flex justify-center items-center hover:border-saffron">
            <img src="../../public/down.svg" alt="" className="max-h-7" />
          </button>
        </div>
      </section>
      <section
        className="h-[100svh] w-[80svw] mx-auto flex flex-col items-center justify-evenly"
        id="landing"
      >
        <div className=" flex flex-col items-center relative">
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
            <img src="../../public/down.svg" alt="" className="max-h-7" />
          </button>
        </div>
      </section>
    </main>
  );
}
