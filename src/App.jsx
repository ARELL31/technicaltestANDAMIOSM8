import React from 'react';
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import About from "./Components/About";
import Knowledge from "./Components/Knowledge.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <div className="bg-violet-950 min-h-screen">
            <Nav />
            <div className="container mx-auto my-10 p-4">
                <Knowledge/>
                <About />
                <Services/>
                <Contact/>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
