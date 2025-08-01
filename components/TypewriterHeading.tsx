
import React, { useState, useEffect } from 'react';

interface TypewriterHeadingProps {
  words: string[];
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 75 : 150;

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, wordIndex, words]);

  return (
    <h1 className="font-playfair text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
      {text}
      <span className="opacity-50 animate-pulse">|</span>
    </h1>
  );
};

export default TypewriterHeading;
