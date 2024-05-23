export default function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <ul className="w-32 flex justify-evenly p-4 mt-4 gap-4 border-2 border-solid border-white rounded-full font-inter">
          <li>
            <img
              src="../../public/images/linkedin.png"
              alt="logo LinkedIn"
              className="max-h-6"
            />
          </li>
          <li>
            <img
              src="../../public/images/github.png"
              alt="logo Github"
              className="max-h-6"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
