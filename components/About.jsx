import Image from "next/image";
import AboutPicture from "@/public/about.jpeg";
import Gallery from "./Gallery";

const About = () => {

    return (
        <section className="mt-40 geist-sans" id="about">
            <h1 className="text-3xl lg:text-5xl text-white">About Me</h1>
            <div className="mt-12 flex flex-col-reverse lg:flex-row lg:justify-between">
                <p className="mt-12 lg:mt-0 w-full lg:w-[40rem] text-justify text-sm lg:text-lg text-white leading-relaxed">Richmond (Karuna) Wijaya is a result-driven website developer with the focus on delivering impactful results. Over the past 3 years of website developing experience, he has challenged himself to learn and implement new technologies to enhance his skill set and deliver high-quality work. His hardwork and curiosity has led him into a lot of experience in his programming journey, some of them includes technology-related competition as follows: ICP Hackathon by Dfinity (2023), Liga SMK (2023), Lomba Kompetensi Siswa (LKS) in IT Software Solutions for Business (2024), Festival Inovasi dan Kewirausahaan Siswa Nasional (2024) and I/O Festival Tarumanegara University (2024, 2025). Richmond has a decent amount of experience with real-life projects, starting from becoming a full-time developer at Awakening Vajra Nusantara and creating 2 event websites, into becoming an intern at CV Inovatif Digital Teknologi and getting the chance to work as a team to build a crypto news and education platform.</p>
                <Image
                    src={AboutPicture}
                    alt="About Me Picture"
                    width={400}
                    height={300}
                />
            </div>

            <Gallery />            
        </section>
    );
}

export default About;