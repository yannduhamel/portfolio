export default function ContactPage() {
  return (
    <div className="mx-8 lg:mx-auto grid sm:grid-cols-2 items-center gap-16 lg:h-[72svh] my-6 max-w-4xl">
      <div>
        <h1 className="text-3xl text-saffron font-extrabold">Contactez-moi!</h1>
        <p className="text-sm mt-3">
          Que vous ayez une question, un poste à me proposer ou la volonté de me
          dire à quel point les alpagas sont des animaux fabuleux (je suis
          d&apos;accord!) toutes les raisons sont bonnes pour m&apos;envoyer un
          message.
        </p>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007e5d"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
              </div>
              <a href="javascript:void(0)" className=" text-sm ml-3">
                <small className="block">Mail</small>
                <strong>yann.duhamel[at]gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <form
        className="ml-auo space-y-4"
        action="https://formspree.io/f/xrgnwbvw"
        method="POST"
      >
        <input
          type="text"
          placeholder="Prénom & nom"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm text-[#007e5d]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm text-[#007e5d]"
        />
        <input
          type="text"
          placeholder="Sujet"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm text-[#007e5d]"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 text-[#007e5d]"
        ></textarea>
        <button
          type="button"
          className="text-white bg-saffron font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          C&apos;est parti!
        </button>
      </form>
    </div>
  );
}
