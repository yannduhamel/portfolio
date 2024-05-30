import PropTypes from "prop-types";

export default function ProjectCard({ data }) {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 mx-auto mt-24 h-80 w-52">
      <img
        src={data.image}
        alt={data.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">{data.name}</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {data.type}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};
