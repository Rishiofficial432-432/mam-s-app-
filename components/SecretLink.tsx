
import React, { useState } from 'react';

const SecretLink: React.FC = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="mt-8 text-center">
            <button
                onClick={() => setIsRevealed(!isRevealed)}
                className="text-slate-500 italic hover:text-slate-300 transition-colors duration-300 text-sm focus:outline-none"
                aria-expanded={isRevealed}
            >
                Only if you're curious...
            </button>
            {isRevealed && (
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg max-w-md mx-auto animate-fade-in">
                    <p className="text-slate-300 text-base leading-relaxed">
                        “Yes, I build AI. Yes, I’m in the Google for Startups thing. But none of that felt this special. This one’s for you, ma’am. Pookie mode: activated 💘”
                    </p>
                </div>
            )}
        </div>
    );
};

export default SecretLink;
