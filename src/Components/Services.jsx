import React from 'react';
import { FaJava } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const Services = () => {
    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Mis Servicios</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="text-6xl mb-4 text-red-600">
                        <FaJava />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Desarrollo de aplicaciones en Java con NetBeans y bases de datos relacionales</h3>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="text-6xl mb-4 text-blue-800">
                        <SiDjango />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Desarrollo web basado en React o en Django</h3>
                </div>
            </div>
        </div>
    );
}

export default Services;
