import { useParams } from "react-router-dom";
import project from "../assets/data/project.json";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const projectDetail = project.find((project) => project.id === id);
  return (
    <>
      <h1>Coucou {projectDetail.name} </h1>
    </>
  );
}
