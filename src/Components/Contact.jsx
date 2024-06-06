import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
        } else if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
        } else {
            alert('¡Formulario enviado correctamente!');
            form.reset();
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center col-span-2 sm:col-auto">
                <h2 className="text-3xl font-bold text-sky-300 mb-8">Contacto</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Nombre:</label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded px-3 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 rounded px-3 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded px-3 py-2 w-full" required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
