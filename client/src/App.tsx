import { useState } from "react";

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
      <div className="w-full bg-black" style={{ height: "40rem" }}>
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
        className="w-full bg-black flex relative"
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

        <div className="w-8/12">
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
      <div className="h-screen w-full bg-black p-8 -mb-1">
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
                <h1 className="text-white text-center text-xs font-dmsans leading-relaxed">
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
      <div className="h-screen w-full bg-black flex relative">
        <div className="h-full w-5/12 ml-2 bg-black grid grid-rows-8">
          <div className="row-span-1 mb-2">
            <div className="border-l-4 h-full border-white ml-16"></div>
          </div>

          <div className="row-span-1">
            <h1 className="text-white font-dmsans ml-2 mt-2">
              <span className="text-4xl">My Skills</span> <br />
              <span className="text-base text-indigo-700 font-dmsans">
                do you recognize?
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
      <div className="min-h-96 w-full bg-black">
        <div className="h-32 flex items-center justify-center">
          <h1 className="text-4xl font-dmsans font-bold text-white">
            Recent Projects
          </h1>
        </div>

        <div className="flex-grow w-full grid grid-cols-2 grid-rows-1">
          {project.map((x) => (
            <div className="h-auto m-2 group">
              <div className="bg-white border-2 rounded-md relative h-32 w-44">
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
      <div className="h-screen w-full bg-black flex relative">
        <div className="h-full w-5/12 ml-2 bg-black grid grid-rows-8">
          <div className="row-span-8 mb-2">
            <div className="border-l-4 h-full border-white ml-16"></div>
          </div>
        </div>

        <div className="h-full w-10/12 grid grid-rows-10 mt-4">
          <div className="row-span-3">
            <div className="h-24 flex items-center justify-center">
              <h1 className="text-white text-2xl font-dmsans font-bold">
                Contact Me
              </h1>
            </div>

            <div className="p-2 mx-2">
              <h1 className="text-white font-dmsans flex items-center mb-1">
                <svg
                  stroke="white"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="mx-2">+6287872866839</span>
              </h1>
              <h1 className="text-white font-dmsans flex items-center">
                <svg
                  stroke="white"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="mx-2">richiwirjaya@gmail.com</span>
              </h1>
            </div>
          </div>

          <div className="row-span-1 grid grid-cols-12">
            <hr className="w-10/12 col-span-5 border-t-4 border-white my-4" />
            <div className="col-span-2">
              <h1 className="-ml-1 text-white text-2xl font-dmsans font-bold">
                OR
              </h1>
            </div>
            <hr className="w-10/12 col-span-5 border-t-4 border-white my-4" />
          </div>

          <div className="row-span-4 p-2">
            <div className="h-10 mb-2 flex items-center justify-center">
              <h1 className="text-white text-3xl font-dmsans font-bold">
                Fill The Form
              </h1>
            </div>

            <div className="">
              <form action="">
                <input
                  className="w-full h-10 p-2 my-2 border-2 rounded-md bg-black font-dmsans text-white"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-full h-10 p-2 my-2 border-2 rounded-md bg-black font-dmsans text-white"
                  type="text"
                  placeholder="Email"
                />
                <button className="w-full h-10 my-2 border-2 border-indigo-700 rounded-md bg-black font-dmsans text-indigo-700 hover:bg-indigo-700 hover:text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="row-span-1 flex justify-center">
            <a href="https://www.instagram.com/r.chiee_/">
              <svg
                className="size-7 mx-3"
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/richiwirjaya.richiwirjaya.5/?locale=id_ID">
              <svg
                className="size-7 mx-3"
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a href="https://github.com/inimomon">
              <svg
                className="size-7 mx-3"
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"
                ></path>
              </svg>
            </a>
            <a href="https://discord.com/users/565405658963378186">
              <svg
                className="size-7 mx-3"
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* End Fifth Section */}
    </>
  );
}

export default App;
