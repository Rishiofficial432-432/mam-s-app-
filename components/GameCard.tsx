
import React from 'react';

const GameCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 text-left border border-blue-200 animate-pulse w-full">
        <h2 className="font-playfair text-3xl font-bold mb-4 text-blue-600">🎲 Your Turn, Ma’am</h2>
        <div className="text-gray-700 leading-relaxed text-[17px]">
            <p className="mb-4">
              You always light up our class with games, quizzes, and surprises... so today, I made one for you 😄
            </p>
            <p className="mb-4">
              I know I usually build serious tech — but this time, I made something just a little fun, a little dreamy… and a little personal.
            </p>
            <p className="mb-4">
              It’s a small game. Nothing huge. But every part of it carries intention, admiration, and maybe a *tiny bit of nervousness* too 😅
            </p>
            <p className="mb-4">
              So… ready to play?
            </p>

            <div className="text-center">
                <a
                    href="https://vibe-decoder-surprise.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    🎮 Play the Game
                </a>
            </div>
        </div>
    </div>
  );
};

export default GameCard;
