import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const content = (
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-violet-950 transition">
            <ul className="text-center text-xl p20">
                <li className="my-4 py-4 border-b border-slate-500 hover:border-slate-800 hover:rounded">
                    <Link to="/home" onClick={closeMobileMenu}>Inicio</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-500 hover:border-slate-800 hover:rounded">
                    <Link to="/about" onClick={closeMobileMenu}>Sobre mí</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-500 hover:border-slate-800 hover:rounded">
                    <Link to="/contact" onClick={closeMobileMenu}>Contactame</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-500 hover:border-slate-800 hover:rounded">
                    <Link to="/services" onClick={closeMobileMenu}>Servicios</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-500 hover:border-slate-800 hover:rounded">
                    <Link to="/knowledge" onClick={closeMobileMenu}>Conocimientos</Link>
                </li>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-sky-300 lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1 ">
                    <span className="text-3xl font-bold ">
                        ARELL
                    </span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <li className="hover:text-fuchsia-500 transition border-b-2 border-sky-300 hover:border-fuchsia-500 cursor-pointer">
                                <Link to="/home">Inicio</Link>
                            </li>
                            <li className="hover:text-fuchsia-500 transition border-b-2 border-sky-300 hover:border-fuchsia-500 cursor-pointer">
                                <Link to="/about">Sobre mí</Link>
                            </li>
                            <li className="hover:text-fuchsia-500 transition border-b-2 border-sky-300 hover:border-fuchsia-500 cursor-pointer">
                                <Link to="/contact">Contactame</Link>
                            </li>
                            <li className="hover:text-fuchsia-500 transition border-b-2 border-sky-300 hover:border-fuchsia-500 cursor-pointer">
                                <Link to="/services">Servicios</Link>
                            </li>
                            <li className="hover:text-fuchsia-500 transition border-b-2 border-sky-300 hover:border-fuchsia-500 cursor-pointer">
                                <Link to="/knowledge">Conocimientos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/>  : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    );
}

export default Nav;
