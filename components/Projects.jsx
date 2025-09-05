import ProjectCard from "./ProjectCard";
import Website1 from "@/public/website-picture/website1.png";
import Website2 from "@/public/website-picture/website2.png";
import Website3 from "@/public/website-picture/website3.png";
import Website4 from "@/public/website-picture/website4.png";
import Website5 from "@/public/website-picture/website5.png";
import Website6 from "@/public/website-picture/website6.png";

const Projects = () => {
    const projectData = [
        {
            image: Website1,
            title: "Sound Healing Ticketing Website",
            tags: ["Front-end", "Back-end", "PHP", "Payment Gateway"],
            description: "Sound healing is a ticketing website for a spiritual events. With the integration of Midtrans payment gateway, users can easily book and pay for events online. The barcode system makes it easy to take attendance during the event.",
            link: "https://awakeningvajranusantara.org/soundhealing101/"
        },
        {
            image: Website2,
            title: "Liga SMK Company Profile",
            tags: ["Front-end", "HTML", "TailwindCSS"],
            description: "Liga SMK is a front-end company profile project for a vocational high school competition. The website features a modern and responsive design using TailwindCSS, with challenges of building complex components.",
            link: "https://github.com/inimomon/liga-smk"
        },
        {
            image: Website3,
            title: "Rasantara: Indonesia Encyclopedia",
            tags: ["Front-end", "Back-end", "ReactJS", "TailwindCSS"],
            description: "Rasantara is an Indonesia Encyclopedia website build as a final project in Tarumanegara University's I/O Festival. Through interactive display, Rasantara aims to educate people more about Indonesia's robust culture.",
            link: "https://github.com/inimomon/rasantara"
        },
        {
            image: Website4,
            title: "MeditasiAI by AVN",
            tags: ["Front-end", "Back-end", "API", "NextJS", "NodeJS", "Express", "TailwindCSS"],
            description: "Rasantara is an Indonesia Encyclopedia website build as a final project in Tarumanegara University's I/O Festival. Through interactive display, Rasantara aims to educate people more about Indonesia's robust culture.",
            link: "https://meditasiai.awakeningvajranusantara.org/"
        },
        {
            image: Website5,
            title: "Perpustakaan Digital",
            tags: ["Front-end", "Back-end", "Laravel", "TailwindCSS", "MySQL"],
            description: "Perpustakaan Digital is a digital library platform that allows users to access a wide range of books and resources online. Built with Laravel and TailwindCSS to complete my junior coder certificate.",
            link: "https://github.com/inimomon/perpustakaan-online"
        },
        {
            image: Website6,
            title: "SEA Cathering",
            tags: ["Front-end", "Back-end", "NextJS", "TailwindCSS"],
            description: "SEA Catering is a web application that allows users to order catering services online built with NextJS. It serves as a criteria to join Indonesia University's Academy.",
            link: "https://github.com/inimomon/sea-cathering"
        }
    ];

    return (
        <div className="pt-20 h-auto w-full geist-sans">
            <h1 className="text-3xl lg:text-5xl text-white">Recent Projects</h1>
            {/* <div className="h-10 w-full mt-8 border bg-[#0b0c0e] flex items-center px-6 text-white">Search for projects</div> */}

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        image={project.image}
                        title={project.title}
                        tags={project.tags}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;