import Image from "next/image";
import ProjectImage from "@/public/website-picture/website1.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ image, title, tags, description, link }) => {
    return (
    <div className="w-full bg-[#1a1a1a] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-52 lg:h-72 overflow-hidden">
            <Image
            src={image}
            alt="Project Image"
            fill
            className="object-cover"
            sizes="(min-width: 500px) 500px, 80vw"
            />
        </div>
        <section className="p-4">
            <h2 className="text-2xl text-white">{title}</h2>
            <div className="mt-2 text-gray-300 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="py-1 px-2 bg-[#222222] text-[0.7rem] font-semibold">{tag}</span>
                ))}
            </div>
            <p className="mt-8 text-gray-400 text-justify text-sm lg:text-base">{description}</p>
            <Link
                href={link}
                className="mt-8 inline-flex items-center gap-2 text-blue-700 hover:underline"
            >
                <span>View Project</span>
                <FontAwesomeIcon className="size-6" icon={faArrowRight} />
            </Link>
        </section>
    </div>
    );
}

export default ProjectCard;