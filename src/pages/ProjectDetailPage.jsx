import { useParams } from "react-router-dom";
import project from "../../public/data/project.json";
import left from "../assets/icon/left.svg";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectDetail = project.find((project) => project.id === id);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleBack}
        className="flex gap-1 ml-4 md:ml-12"
      >
        <img src={left} alt="Flèche gauche de retour en arrière" /> Retour
      </button>
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center mx-8 lg:h-[72svh]">
        <img
          src={projectDetail.image}
          alt="Image d'illustration du projet"
          className="max-w-56 lg:max-w-60 xl:max-w-sm rounded-full mt-10 lg:mt-4"
        />
        <div className="lg:flex lg:flex-col">
          <h1 className="mt-4 font-migra text-4xl lg:text-7xl text-saffron">
            {projectDetail.name}
          </h1>
          <h2 className="mb-10 lg:mb-4">{projectDetail.type}</h2>
          <p className="mb-4 lg:w-[60vw] xl:w-[40vw]">
            {projectDetail.description}
          </p>
          <div className="mb-4 lg:flex lg:gap-12">
            <p>
              Le site:{" "}
              <a
                href={projectDetail.website}
                target="_blank"
                className="hover:text-saffron hover:font-bold"
              >
                par là!
              </a>
            </p>
            <p>
              Le repo:{" "}
              <a
                href={projectDetail.repo}
                target="_blank"
                className="hover:text-saffron hover:font-bold"
              >
                par ici!
              </a>
            </p>
          </div>
          <div className="flex gap-x-4 text-saffron font-bold">
            <div>{projectDetail.stack.stack1}</div>
            <div>{projectDetail.stack.stack2}</div>
            <div>{projectDetail.stack.stack3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
