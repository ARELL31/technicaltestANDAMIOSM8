import React from 'react';

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="bg-gray-800 text-white py-8 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Un mensaje para SM8</h2>
                            <p className="text-lg">Quisiera dejar mi compromiso para trabajar, aprender y enternder nuevas tecnologías, además de mejorar mis habilidades de trabajo en equipo.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">GNU License 3</h2>
                            <p className="text-lg">Este proyecto está licenciado bajo la GNU General Public License v3.0.</p>
                            <p className="text-lg mt-4">Tecnologías utilizadas: HTML, CSS, JavaScript, React.js, etc.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
