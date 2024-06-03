import { useParams } from "react-router-dom";
import project from "../assets/data/project.json";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectDetail = project.find((project) => project.id === id);
  return (
    <div className="flex flex-col items-center mx-8">
      <img
        src={projectDetail.image}
        alt="Image d'illustration du projet"
        className="max-w-56 rounded-full mt-10"
      />
      <h1 className="mt-4 font-migra text-4xl text-saffron">
        {projectDetail.name}
      </h1>
      <h2 className="mb-10">{projectDetail.type}</h2>
      <p className="mb-4">{projectDetail.description}</p>
      <div className="mb-4">
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
  );
}
