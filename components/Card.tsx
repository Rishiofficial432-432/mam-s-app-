
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-900/40 backdrop-blur-lg rounded-2xl shadow-lg p-8 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl text-left border border-white/10">
      <h2 className="font-playfair text-3xl text-slate-100 mb-4">{title}</h2>
      <div className="text-slate-300 leading-relaxed text-[17px]">
        {children}
      </div>
    </div>
  );
};

export default Card;
