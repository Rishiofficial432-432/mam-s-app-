import React, { useState, useEffect, useRef } from 'react';
import SoundOffIcon from './icons/SoundOffIcon';
import SoundOnIcon from './icons/SoundOnIcon';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/music/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.7;
    audio.muted = false; // Ensure it's not muted by default
    audioRef.current = audio;

    // Add event listener for when the document receives user interaction
    const handleInteraction = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {
          console.log('Autoplay still not allowed');
        });
      }
    };

    // Play immediately (this might be blocked by browser)
    audio.play().catch(() => {
      console.log('Initial autoplay blocked - waiting for interaction');
    });

    // Add listeners for various user interactions
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.log);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
      aria-label={isPlaying ? 'Mute music' : 'Unmute music'}
      title={isPlaying ? 'Mute music' : 'Unmute music'}
    >
      {isPlaying ? (
        <SoundOnIcon className="h-6 w-6 text-white" />
      ) : (
        <SoundOffIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}
