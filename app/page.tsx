import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Portfolio() {
  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-start bg-gray-50 text-gray-900 ${inter.className}`}
    >
        <link rel="icon" type="image/png" href="/favicon.png" />
      {/* Cover / Hero Section */}
      <div
        className="relative w-full h-[280px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-b-2xl shadow-md"
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-b-2xl"></div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center -mt-[100px] px-6 text-center relative z-10">
        <Image
          src="/photo.jpeg"
          alt="Hamza"
          width={200}
          height={200}
          className="rounded-full border-4 border-white shadow-xl object-cover w-[200px] h-[200px]"
        />

        <h1 className="text-3xl font-bold mt-6 tracking-tight">
          Hamza <span className="text-blue-600">| Full Stack Developer</span>
        </h1>

        <p className="text-[17px] font-normal mt-4 max-w-3xl leading-relaxed text-gray-700">
          Hello! I’m <span className="font-semibold text-blue-600">Hamza</span>, a
          passionate <span className="font-semibold">Full Stack Web Developer</span>,
          <span className="font-semibold"> Mobile Developer</span>, and{" "}
          <span className="font-semibold">Pentester</span> in Cybersecurity.
          I studied Engineering at the University of Mouloud Mammeri of Tizi Ouzou and
          am currently pursuing a Master’s degree in{" "}
          <span className="italic">
            Electronics, Electrical Energy, and Automation (E3A)
          </span>{" "}
          at the University of Versailles Saint-Quentin-en-Yvelines –
          University of Paris-Saclay.
        </p>
      </div>

      {/* Projects Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 mt-12">
        <h1 className="text-5xl font-extrabold text-center mb-14 tracking-tight text-gray-900">
          <span className="text-blue-600">My</span> Projects
        </h1>

        <div className="flex flex-wrap justify-center items-start gap-12 px-8">
          {/* Project 1 */}
          <Link
            href="https://store-azure-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 max-w-sm border border-gray-100"
          >
            <div className="overflow-hidden rounded-xl w-full">
              <Image
                src="/store.png"
                alt="Store Project"
                width={400}
                height={400}
                className="rounded-xl object-contain w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">Store</h2>
            <p className="mt-2 text-center text-gray-700 leading-relaxed text-[15px]">
              A web application for organizing, storing, and securely sharing
              documents with other users.
            </p>
          </Link>

          {/* Project 2 */}
          <Link
            href="https://travelia-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 max-w-sm border border-gray-100"
          >
            <div className="overflow-hidden rounded-xl w-full">
              <Image
                src="/travelia.png"
                alt="Travelia Project"
                width={400}
                height={400}
                className="rounded-xl object-contain w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">Travelia</h2>
            <p className="mt-2 text-center text-gray-700 leading-relaxed text-[15px]">
              A travel app for discovering destinations and planning your next
              adventure.
            </p>
          </Link>

          {/* Project 3 */}
          <Link
            href="https://hop-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 max-w-sm border border-gray-100"
          >
            <div className="overflow-hidden rounded-xl w-full">
              <Image
                src="/imagnify.png"
                alt="Imagnify Project"
                width={400}
                height={400}
                className="rounded-xl object-contain w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">Imagnify</h2>
            <p className="mt-2 text-center text-gray-700 leading-relaxed text-[15px]">
              A creative app to generate, store, and modify images using AI-powered
              tools<br></br>.
              (in development)
            </p>
          </Link>
        </div>
      </section>
      <footer className="w-full py-10 flex flex-col items-center bg-gray-900 text-gray-400">
  <h3 className="text-lg font-medium mb-4 text-gray-300">
    Connect with me
  </h3>
  
  <div className="flex space-x-6 mb-4">
    {/* GitHub */}
    <a
      href="https://github.com/Hamza-dev-web"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 
        9.8 8.205 11.385.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 
        1.205.084 1.84 1.237 1.84 1.237 
        1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 
        0-1.31.465-2.382 1.235-3.22-.135-.303-.54-1.523.105-3.176 
        0 0 1.005-.322 3.3 1.23.96-.267 
        1.98-.399 3-.405 1.02.006 2.04.138 
        3 .405 2.28-1.552 3.285-1.23 
        3.285-1.23.645 1.653.24 2.873.12 3.176.765.838 
        1.23 1.91 1.23 3.22 0 4.61-2.805 
        5.625-5.475 5.92.42.36.81 1.096.81 2.22 
        0 1.606-.015 2.896-.015 3.286 
        0 .315.21.69.825.57C20.565 22.092 24 17.592 24 
        12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M19 0h-14C2.239 0 0 2.239 
        0 5v14c0 2.761 2.239 5 5 5h14c2.762 
        0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.09 
        20.452H3.545V9h3.545v11.452zM5.318 
        7.544c-1.137 0-2.059-.923-2.059-2.06 
        0-1.136.922-2.058 2.059-2.058 
        1.136 0 2.058.922 2.058 2.058 
        0 1.137-.922 2.06-2.058 2.06zM20.455 
        20.452h-3.545v-5.604c0-1.336-.025-3.055-1.863-3.055-1.864 
        0-2.15 1.457-2.15 2.963v5.696H9.352V9h3.405v1.561h.048c.474-.9 
        1.632-1.849 3.36-1.849 3.594 
        0 4.29 2.366 4.29 5.444v6.296z"/>
      </svg>
    </a>
  </div>

  <p className="text-sm text-gray-500">
    © {new Date().getFullYear()} Hamza — Built with Next.js & Tailwind CSS
  </p>
</footer>

    </div>
  );
}
