import React from 'react';

export default function GameCard() {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl text-center transform hover:scale-[1.02] transition-all duration-300">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                        Ready for the Surprise? ✨
                    </h2>
                    <div className="space-y-4 text-slate-300">
                        <p className="text-lg leading-relaxed">
                            Because excellence deserves celebration,
                            <br />
                            I've created something special just for you.
                        </p>
                        <p className="text-base opacity-90">
                            A little game that celebrates your impact —
                            <br />
                            where confidence meets fun, and learning meets play.
                        </p>
                    </div>
                </div>

                <a
                    href="https://shiny-enigma-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col items-center gap-3"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <button className="relative bg-slate-900 text-white font-semibold py-4 px-12 rounded-lg transform transition-all duration-300 group-hover:scale-105">
                            <span className="text-lg">Play the Game</span>
                            <div className="text-sm opacity-75 mt-1">Click to start your journey</div>
                        </button>
                    </div>
                    <div className="text-slate-400 text-sm animate-bounce mt-2">
                        🎮 Let's make learning magical 🌟
                    </div>
                </a>
            </div>
        </div>
    );
}
