import React from 'react';

export default function SecretLink() {
    return (
        <div className="mt-8 text-center">
            <a
                href="https://shiny-enigma-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-violet-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
            >
                Play
            </a>
        </div>
    );
}
