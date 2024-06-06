import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Sobre Mí</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img src="/src/assets/imagen_about_me.jpg" alt="Tu nombre" className="w-32 h-32 rounded-full mb-4"/>
                <h3 className="text-2xl font-semibold mb-2">Luis Fernando Franco Arellano</h3>
                <p className="text-lg text-gray-700 text-center">Estudiante de ingeniería en computación</p>
                <div className="flex mt-4">
                    <a href="https://www.linkedin.com/in/luis-fernando-franco-arellano-289206289/" className="text-blue-600 hover:underline mr-4">Visita mi LinkedIn</a>
                    <a href="/src/assets/PDF/CV_Franco.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Currículum Vitae</a>
                </div>
            </div>
        </div>
    );
}

export default About;
