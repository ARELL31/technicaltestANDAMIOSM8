import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaUbuntu, FaGitAlt, FaJava } from "react-icons/fa";
import { PiMicrosoftWordLogoFill, PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiDjango, SiGnubash } from "react-icons/si";

const Knowledge = () => {
    const skills = [
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Conocimientos Linux", icon: <FaUbuntu className="text-orange-500" /> },
        { name: "Microsoft Word", icon: <PiMicrosoftWordLogoFill className="text-blue-700" /> },
        { name: "Microsoft Excel", icon: <PiMicrosoftExcelLogoFill className="text-green-600" /> },
        { name: "Django", icon: <SiDjango className="text-blue-800" /> },
        { name: "Bash", icon: <SiGnubash className="text-gray-500" /> },
        { name: "Control de versiones (Git)", icon: <FaGitAlt className="text-red-600" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Lenguaje C", icon: <img src="/src/assets/lenguaje_C.png" alt="C" className="w-12 h-12" /> },
        { name: "Lenguaje C++", icon: <img src="/src/assets/lenguaje_C++.svg" alt="C++" className="w-12 h-12" /> },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Mis Conocimientos</h2>
            <Slider {...settings}>
                {skills.map((skill, index) => (
                    <div key={index} className="p-4" style={{ height: "150px" }}> {/* Agrega estilo en línea para la altura */}
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
                            <div className="text-6xl mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Knowledge;
