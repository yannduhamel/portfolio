export default function HomePage() {
  return (
    <div className="h-[77svh] w-[80svw] mx-auto flex flex-col items-center justify-evenly text-center">
      <div className=" flex flex-col items-center relative text-center">
        <img
          src="../../public/images/duotone.jpg"
          alt="photo de profil"
          className="max-h-[40svh] rounded-full mx-auto"
        />
        <h1 className="font-migra text-7xl absolute bottom-[-9%]">Bonjour!</h1>
      </div>
      <div>
        <h2 className="font-inter text-3xl">
          Je suis <span className="font-bold text-saffron">Yann</span>,
          développeur web installé en{" "}
          <span className="font-bold text-saffron">Bretagne</span>
        </h2>
      </div>
    </div>
  );
}
