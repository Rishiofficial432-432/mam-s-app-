
import React, { useState, useCallback, useRef, useEffect } from 'react';
import TypewriterHeading from './components/TypewriterHeading';
import Card from './components/Card';
import HeartIcon from './components/icons/HeartIcon';
import Ballpit from './components/Ballpit';
import BallpitControls from './components/BallpitControls';
import SlidersIcon from './components/icons/SlidersIcon';
import SoundOnIcon from './components/icons/SoundOnIcon';
import SoundOffIcon from './components/icons/SoundOffIcon';
import SecretLink from './components/SecretLink';
import GameCard from './components/GameCard';

const NextButton: React.FC<{ onClick: () => void; text?: string }> = ({ onClick, text = "Next" }) => (
  <button
    onClick={onClick}
    className="mt-8 bg-violet-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
    aria-label={text}
  >
    {text}
  </button>
);

const Page1: React.FC<{ onNext: () => void; content: any }> = ({ onNext, content }) => (
  <div className="animate-fade-in w-full flex flex-col items-center">
    <header className="my-12">
      <TypewriterHeading words={['Power.', 'Clarity.', 'Voice.']} />
    </header>
    <Card title={content.title}>{content.content}</Card>
    <NextButton onClick={onNext} />
  </div>
);

const ContentPage: React.FC<{ onNext: () => void; content: any; nextButtonText?: string }> = ({ onNext, content, nextButtonText }) => (
    <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-grow">
        <Card title={content.title}>{content.content}</Card>
        <NextButton onClick={onNext} text={nextButtonText} />
    </div>
);

const GamePage: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-grow">
        <GameCard />
        <NextButton onClick={onNext} text="See the final message" />
    </div>
);

const FinalPage: React.FC<{ onRestart: () => void; }> = ({ onRestart }) => (
    <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-grow">
        <button
            onClick={onRestart}
            className="text-slate-400 italic hover:text-white transition-colors duration-300 text-lg"
        >
            Read the story again?
        </button>
        <SecretLink />
    </div>
);

const ballpitColors = [0x7e22ce, 0xc026d3, 0x64748b, 0x475569, 0x1e293b];

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedPlaying = useRef(false);

  useEffect(() => {
    // The previous archive.org URL was causing "no supported sources" errors. Replaced with a new one from Pixabay CDN for better reliability.
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/11/22/audio_859b1a3765.mp3');
    audioRef.current.loop = true;
    audioRef.current.muted = isMuted;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ballpit settings state
  const [followCursor, setFollowCursor] = useState(true);
  const [count, setCount] = useState(150);
  const [gravity, setGravity] = useState(0.1);
  const [friction, setFriction] = useState(0.9);
  const [wallBounce, setWallBounce] = useState(0.95);
  const [lightIntensity, setLightIntensity] = useState(100);
  const [ambientIntensity, setAmbientIntensity] = useState(1);
  const [minSize, setMinSize] = useState(0.8);
  const [maxSize, setMaxSize] = useState(1.5);
  const [maxVelocity, setMaxVelocity] = useState(0.15);


  const nextPage = useCallback(() => {
    if (page === 0 && !hasStartedPlaying.current && audioRef.current) {
        audioRef.current.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
        hasStartedPlaying.current = true;
    }
    setPage(p => (p + 1) % 5);
  }, [page]);

  const restart = useCallback(() => {
    setPage(0);
  }, []);

  const toggleMute = () => {
      if (audioRef.current) {
          const newMutedState = !audioRef.current.muted;
          audioRef.current.muted = newMutedState;
          setIsMuted(newMutedState);
      }
  };

  const handleMinSizeChange = (value: number) => {
    if (value > maxSize) {
        setMaxSize(value);
    }
    setMinSize(value);
  };

  const handleMaxSizeChange = (value: number) => {
      if (value < minSize) {
          setMinSize(value);
      }
      setMaxSize(value);
  };


  const cardData = [
    {
      title: "Ma’am, why do I sit straighter when you enter?",
      content: (
        <>
          <p className="mb-4">
            The way you carry your words isn’t loud — it’s magnetic 🧲✨
          </p>
          <p className="mb-4">
            You don’t walk into the room...
            <br />
            you glide in with a whole aura like 🚶‍♀️💫🔊
            <br />
            and suddenly I’m like <em className="italic opacity-80">“yes ma’am, I’ll fix my posture 😭🙏”</em>
          </p>
          <p className="mb-4">
            You’ve got that TED-Talk-but-make-it-vibey energy.
            <br/>
            Not loud. Just legendary.
          </p>
          <p className="mb-4">
            I’ve seen investors, CEOs, leaders…
            <br />
            but no one ever made <em className="italic opacity-80">communication</em> feel this alive.
          </p>
          <p>
            You don’t just speak — you shift the frequency.
          </p>
        </>
      ),
    },
    {
      title: "Gujarati medium? Ma’am, you’re lying 😭",
      content: (
        <>
            <p className="mb-4">
                Let me get this straight...
                <br />
                You did your entire school life in Gujarati medium…
                <br />
                AND NOW YOU SPEAK LIKE YOU'RE ON A NETFLIX DOCUSERIES 😭🎤🇺🇸??
            </p>
            <p className="mb-4">
                Like <em className="italic opacity-80">“hello, today we discuss assertive tone modulation”</em>
                <br />
                and I’m just sitting there like:
                <br />
                “broooo am I blushing or learning?? 🥲”
            </p>
            <p className="mb-4">
                Your vocabulary is so smooth it needs a skincare routine 🧴🫧
                <br />
                Your accent is cleaner than my codebase (and that’s saying A LOT)
                <br />
                You made me believe fluency isn’t born — it’s built 💪🧠💬
            </p>
            <p>
                And now?
                <br />
                I don’t want to just speak English.
                <br />
                I wanna <em className="italic font-semibold">own it</em> — Rishi style, with a sprinkle of Ma’am magic 💫
            </p>
        </>
      ),
    },
    {
      title: "I build AI... but this time I built something else",
      content: (
        <>
          <p className="mb-4">
            Dear Ma’am,
          </p>
          <p className="mb-4">
            I’ve built startups.
            <br />
            I’ve closed deals.
            <br />
            I’ve even pitched to the Romanian board and made AI agents smarter...
          </p>
          <p className="mb-4">
            But I’ve never built something <em className="italic">because someone inspired me this deeply.</em>
          </p>
          <p className="mb-4">
            You don’t just teach speaking.
            <br />
            You show us what <em className="italic">presence</em> looks like.
          </p>
          <p className="mb-4">
            And now I’m here —
            <br />
            a pookie with too much admiration
            <br />
            and no idea how to process all this influence 🥺🫠
          </p>
          <p className="mb-4">
            If one day I speak like a leader…
            <br />
            not with loud words,
            <br />
            but with clarity, confidence, and calm...
          </p>
          <p className="mb-4">
            Just know:
            <br />
            <strong className="font-semibold text-white">You were the blueprint.</strong> 💙🧠🗣️
          </p>
          <p className="mt-6 text-right w-full">
            — Rishi
            <br/>
            <span className="text-sm opacity-70">(not just the founder of Aveon AI India,</span>
            <br/>
            <span className="text-sm opacity-70">but the guy who went full 🐶💗👶 in your class)</span>
          </p>
        </>
      ),
    },
  ];

  const pages = [
    <Page1 key="page1" onNext={nextPage} content={cardData[0]} />,
    <ContentPage key="page2" onNext={nextPage} content={cardData[1]} />,
    <ContentPage key="page3" onNext={nextPage} content={cardData[2]} nextButtonText="With my thanks" />,
    <GamePage key="pageGame" onNext={nextPage} />,
    <FinalPage key="page4" onRestart={restart} />
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0a0014]">
        <div className="absolute inset-0 z-0 opacity-100">
            <Ballpit
                className="w-full h-full"
                colors={ballpitColors}
                gravity={gravity}
                friction={friction}
                count={count}
                minSize={minSize}
                maxSize={maxSize}
                size0={3}
                lightIntensity={lightIntensity}
                ambientIntensity={ambientIntensity}
                maxVelocity={maxVelocity}
                wallBounce={wallBounce}
                followCursor={followCursor}
            />
        </div>

        {showControls && (
            <BallpitControls
                followCursor={followCursor}
                onFollowCursorChange={setFollowCursor}
                count={count}
                onCountChange={setCount}
                gravity={gravity}
                onGravityChange={setGravity}
                friction={friction}
                onFrictionChange={setFriction}
                wallBounce={wallBounce}
                onWallBounceChange={setWallBounce}
                lightIntensity={lightIntensity}
                onLightIntensityChange={setLightIntensity}
                ambientIntensity={ambientIntensity}
                onAmbientIntensityChange={setAmbientIntensity}
                minSize={minSize}
                onMinSizeChange={handleMinSizeChange}
                maxSize={maxSize}
                onMaxSizeChange={handleMaxSizeChange}
                maxVelocity={maxVelocity}
                onMaxVelocityChange={setMaxVelocity}
            />
        )}

        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 overflow-hidden">
            <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto flex-grow text-center">
                {pages[page]}
            </main>
            <footer className="w-full text-center py-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                  <p className="animate-pulse">
                    Built by Rishi — the boy who usually builds AI, but this time… just wanted ma’am to be proud 🥹💻💗
                  </p>
                  <HeartIcon className="h-4 w-4 text-pink-400" />
                  <button 
                    onClick={toggleMute}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    title={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? <SoundOffIcon className="h-4 w-4 text-slate-400"/> : <SoundOnIcon className="h-4 w-4 text-slate-400"/>}
                  </button>
                  <button 
                    onClick={() => setShowControls(s => !s)} 
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Customize animation"
                    title="Customize animation"
                  >
                    <SlidersIcon className="h-4 w-4 text-slate-400"/>
                  </button>
              </div>
            </footer>
        </div>
    </div>
  );
};

export default App;
