import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [buttonRequest, setButtonRequest] = useState(false);
  const [buttonRecieve, setButtonRecieve] = useState(false);

  const [no, setNo] = useState(0);
  const [about] = useState({
    text: ["Dependable", "Innovative", "Honest", "Efficient"],
    color: ["blue", "red", "yellow", "green"],
    desc: [
      "As a dependable software engineer, I prioritize meeting deadlines and delivering robust, high-quality solutions, ensuring the success and sustainability of my clients' projects. This unwavering commitment to excellence forms the foundation of my professional reputation and fosters long-term client relationships.",
      "As an innovative software engineer, I excel in creating cutting-edge solutions that push the boundaries of technology and design. My approach involves not only staying abreast of the latest trends but also thinking outside the box to develop unique, impactful software applications that set new industry standards.",
      "As an honest software engineer, I uphold transparency and integrity in all aspects of my work, ensuring clear communication and realistic expectations with clients. This approach builds trust and fosters lasting professional relationships, grounded in mutual respect and a commitment to ethical practices.",
      "As an efficient software engineer, I optimize workflows and code to deliver high-quality results swiftly, ensuring that projects are completed on time and within budget. This focus on efficiency drives my ability to streamline processes, reduce unnecessary overhead, and provide effective solutions that meet clients' needs without compromising on quality.",
    ],
    pic: ["dependable.png", "innovative.png", "honest.png", "efficient.png"],
  });

  const [logo] = useState({
    csv: [
      "html.svg",
      "css.svg",
      "c++.svg",
      "typescript.svg",
      "javascript.svg",
      "node.svg",
      "mongodb.svg",
      "react.svg",
      "tailwind.svg",
      "python.svg",
    ],
    bgcolor: [
      "hover:bg-orange-600",
      "hover:bg-blue-400",
      "hover:bg-blue-400",
      "hover:bg-blue-400",
      "hover:bg-yellow-500",
      "hover:bg-lime-600",
      "hover:bg-green-400",
      "hover:bg-blue-400",
      "hover:bg-cyan-400",
      "hover:bg-cyan-400",
    ],
  });

  const [project] = useState([
    {
      img: "../src/assets/website1.png",
      desc: "This is a website for an organization event that is held internationally. It is built using front-end stack and PHP.",
    },
    {
      img: "../src/assets/website2.png",
      desc: "A website made for competition in which i have to slice a landing page. It is built using front-end stack.",
    },
  ]);

  return (
    <>
      {/* Main Content */}
      <div className="w-full bg-black lg:px-24" style={{ height: "40rem" }}>
        <div className="h-2/6 w-full flex flex-col justify-center text-center">
          <h1 className="text-white text-4xl lg:text-7xl font-dmsans">
            This is Richmond
          </h1>
          <h1 className="text-indigo-700 text-lg lg:text-2xl font-dmsans tracking-wide mt-2">
            Im a Software Engineer
          </h1>
        </div>

        <div className="h-4/6 w-full flex justify-center relative">
          <img className="h-full" src="../src/assets/chara.png" alt="" />
          <div className="shadow"></div>
        </div>
      </div>
      {/* End main Container */}

      {/* First Section */}
      <div
        className="w-full bg-black flex relative lg:px-24"
        style={{ height: "25rem" }}
      >
        <div className="relative h-full w-5/12 ml-2 bg-black grid grid-rows-8">
          <div className="row-span-1 mb-2">
            <div className="border-l-4 h-full border-white ml-16"></div>
          </div>

          <div className="row-span-2">
            <h1 className="text-white font-dmsans ml-2">
              <span
                className=""
                style={{ fontSize: "2.5rem", lineHeight: "2.8rem" }}
              >
                It takes
              </span>{" "}
              <br />
              <span
                className=""
                style={{ fontSize: "2.5rem", lineHeight: "2.8rem" }}
              >
                <span className="text-indigo-700">2</span> steps
              </span>
            </h1>
          </div>

          <div className="row-span-5 mt-2">
            <div className="border-l-4 h-full border-white ml-16"></div>
          </div>
        </div>

        <div className="w-8/12 lg:w-6/12">
          <div
            onClick={() => setButtonRequest((prev) => !prev)}
            className={`${
              buttonRequest == true ? "bg-white text-black" : "text-white"
            } h-10 w-11/12 mt-4 border rounded-md flex justify-between items-center hover:bg-white hover:text-black`}
          >
            <h1 className="p-2 pl-4  font-roboto font-bold">Request</h1>
            <svg
              className=" text-4xl"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
          </div>
          {buttonRequest == true ? (
            <div className="min-h-36 w-11/12 p-2 -mt-3 border border-t-0 rounded-md text-white">
              <h1 className="font-dmsans mt-3">
                1. Contact me in email or Whatsapp.
              </h1>
              <h1 className="font-dmsans mt-1">
                2. Send me the project detail and requirements.
              </h1>
              <h1 className="font-dmsans mt-1">
                3. Settle the deadline and budget.
              </h1>
            </div>
          ) : null}

          <div
            onClick={() => setButtonRecieve((prev) => !prev)}
            className={`${
              buttonRecieve == true ? "bg-white text-black" : "text-white"
            } h-10 w-11/12 mt-4 border rounded-md flex justify-between items-center hover:bg-white hover:text-black`}
          >
            <h1 className="p-2 pl-4  font-roboto font-bold">Recieve</h1>
            <svg
              className=" text-4xl"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
          </div>
          {buttonRecieve == true ? (
            <div className="min-h-36 w-11/12 p-2 -mt-3 border border-t-0 rounded-md text-white">
              <h1 className="font-dmsans mt-3">1. Get the result.</h1>
              <h1 className="font-dmsans mt-1">
                2. Inform me for any revision.
              </h1>
              <h1 className="font-dmsans mt-1">
                3. Get the annual report (if needed).
              </h1>
            </div>
          ) : null}
        </div>
      </div>
      {/* End First Section */}

      {/* Second Section */}
      <div className="h-screen w-full bg-black p-8 -mb-1 lg:px-20">
        <div className="h-full w-full grid grid-rows-10">
          <div className="row-span-1 flex items-center justify-center">
            <h1 className="text-white text-4xl font-dmsans font-bold tracking-wide">
              About Me
            </h1>
          </div>

          <div className="row-span-8 flex items-center justify-between">
            <div className="w-1/12">
              <svg
                onClick={() => setNo((prev) => (prev == 0 ? 3 : prev - 1))}
                className="text-white text-4xl p-2 border rounded-full hover:bg-white hover:text-black"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
              </svg>
            </div>

            <div className="h-full w-10/12 p-2 py-8 flex flex-col justify-around items-center">
              <div className="h-3/5 w-11/12 flex items-center">
                <h1 className="text-white text-center text-xs lg:text-xl font-dmsans leading-relaxed">
                  {about.desc[no]}
                </h1>
              </div>

              <div className="h-2/4 w-11/12">
                <img
                  className="w-full h-full"
                  src={`../src/assets/${about.pic[no]}`}
                  alt={`${about.text[no]} picture`}
                />
              </div>
            </div>

            <div className="w-1/12">
              <svg
                onClick={() => setNo((prev) => (prev == 3 ? 0 : prev + 1))}
                className="text-white text-4xl p-2 border rounded-full hover:bg-white hover:text-black"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>

          <div className="row-span-1 flex justify-center items-center">
            <div
              className="p-2 w-36 flex justify-center items-center border rounded-lg"
              style={{
                borderWidth: "0.2rem",
                borderColor: `${about.color[no]}`,
              }}
            >
              <h1
                className="text-white font-bold font-dmsans"
                style={{ color: `${about.color[no]}` }}
              >
                {about.text[no]}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* End Second Section */}

      {/* Third Section */}
      <div className="h-screen w-full bg-black flex relative lg:px-20">
        <div className="h-full w-5/12 ml-2 bg-black grid grid-rows-8">
          <div className="row-span-1 mb-2">
            <div className="border-l-4 h-full border-white ml-16"></div>
          </div>

          <div className="row-span-1">
            <h1 className="text-white font-dmsans ml-2 mt-2">
              <span className="text-4xl lg:text-6xl">My Skills</span> <br />
              <span className="text-base lg:text-lg text-indigo-700 font-dmsans">
                meet your criteria?
              </span>
            </h1>
          </div>

          <div className="row-span-6 mt-2">
            <div className="border-l-4 h-full border-white ml-16"></div>
          </div>
        </div>

        <div className="w-7/12 p-6 py-10 ">
          <div className="h-full w-full grid grid-rows-5 grid-cols-2">
            {logo.csv.map((x, index) => (
              <div
                className={`m-2 p-2 my-6 border-2 rounded-md ${logo.bgcolor[index]}`}
                key={index}
              >
                <img
                  className="w-full h-full"
                  src={`../src/assets/logo/${x}`}
                  alt="skills logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Third Section */}

      {/* Fourth Section */}
      <div className="min-h-96 w-full bg-black lg:px-20">
        <div className="h-32 flex items-center justify-center">
          <h1 className="text-4xl font-dmsans font-bold text-white">
            Recent Projects
          </h1>
        </div>

        <div className="flex justify-between w-full">
          {project.map((x) => (
            <div className="h-auto m-2 group">
              <div className="bg-white border-2 rounded-md relative h-32 lg:h-56 w-full">
                <img className="h-full w-full" src={`${x.img}`} alt="" />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-0 ${
                    window.innerWidth > 768 ? "group-hover:bg-opacity-80" : ""
                  } flex justify-center items-center transition duration-300 ease-in-out`}
                >
                  <h1
                    className={`hidden ${
                      window.innerWidth > 768 ? "group-hover:block" : ""
                    } mt-2 mx-2 text-white text-lg text-center font-dmsans`}
                  >
                    {x.desc}
                  </h1>
                </div>
              </div>
              {window.innerWidth < 768 ? (
                <h1 className="mt-2 mx-2 text-white text-sm font-dmsans">
                  {x.desc}
                </h1>
              ) : null}
            </div>
          ))}
        </div>

        <div className="h-20 flex items-center justify-center">
          <h1 className="text-indigo-700 text-xl font-dmsans">
            and many more..
          </h1>
        </div>
      </div>
      {/* End Fourth Section */}

      {/* Fifth Section */}
      <div className="h-screen w-full bg-black flex relative lg:px-20">
        <div className="h-full w-full grid grid-rows-10 mt-4">
          {/* Contact Me Title & Info */}
          <div className="row-span-3">
            <div className="h-24 flex items-center justify-center">
              <h1 className="text-white text-2xl lg:text-4xl font-dmsans font-bold">
                Contact Me
              </h1>
            </div>
            <div className="p-2 mx-2 lg:text-xl">
              <h1 className="text-white font-dmsans flex items-center mb-1">
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="mx-2">+6287872866839</span>
              </h1>
              <h1 className="text-white font-dmsans flex items-center">
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="mx-2">richiwirjaya@gmail.com</span>
              </h1>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="w-full flex justify-around text-white lg:text-xl lg:justify-start lg:gap-12">
            <FontAwesomeIcon
              className="size-8 p-2 border-2 border-white rounded-md"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="size-8 p-2 border-2 border-white rounded-md"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              className="size-8 p-2 border-2 border-white rounded-md"
              icon={faGithub}
            />
          </div>
        </div>
      </div>
      {/* End Fifth Section */}
    </>
  );
}

export default App;
