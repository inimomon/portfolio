import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Contact = () => {
    return (
        <>
        <hr className="mt-40 text-white -mx-4 lg:-mx-10" />
        <div className="py-20" id="contact">
            <h1 className="px-2 lg:px-4 py-2 flex items-center justify-center rounded-md border border-white molex text-4xl lg:text-9xl text-white">RICHMOND WIJAYA</h1>
            <div className="pt-10 text-white">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end">
                    <div>
                        <h1 className="text-2xl lg:text-5xl">Get in touch</h1>
                        <div className="mt-4 lg:mt-8 flex gap-4">
                            <Link href="http://wa.me/6287872866839"><FontAwesomeIcon className="size-12 p-2 border border-white rounded-md" icon={faWhatsapp} /></Link>
                            <Link href="https://www.instagram.com/richmond.wijaya"><FontAwesomeIcon className="size-12 p-2 border border-white rounded-md" icon={faInstagram} /></Link>
                            <Link href="https://www.linkedin.com/in/richmond-wijaya-89aa482ab/"><FontAwesomeIcon className="size-12 p-2 border border-white rounded-md" icon={faLinkedin} /></Link>
                            <Link href="https://github.com/inimomon"><FontAwesomeIcon className="size-12 p-2 border border-white rounded-md" icon={faGithub} /></Link>
                        </div>
                    </div>
                    <span className="mt-8 text-center lg:text-start lg:mt-0 text-xs text-white">© {new Date().getFullYear()} Richmond Karuna Wijaya. All rights reserved.</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;