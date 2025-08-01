
import React from 'react';

interface BallpitControlsProps {
    followCursor: boolean;
    onFollowCursorChange: (value: boolean) => void;
    count: number;
    onCountChange: (value: number) => void;
    gravity: number;
    onGravityChange: (value: number) => void;
    friction: number;
    onFrictionChange: (value: number) => void;
    wallBounce: number;
    onWallBounceChange: (value: number) => void;
    lightIntensity: number;
    onLightIntensityChange: (value: number) => void;
    ambientIntensity: number;
    onAmbientIntensityChange: (value: number) => void;
    minSize: number;
    onMinSizeChange: (value: number) => void;
    maxSize: number;
    onMaxSizeChange: (value: number) => void;
    maxVelocity: number;
    onMaxVelocityChange: (value: number) => void;
}

const Slider: React.FC<{ label: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; min: number; max: number; step: number; }> = ({ label, value, onChange, min, max, step }) => (
    <div className="flex flex-col">
        <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
            <label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</label>
            <span>{value}</span>
        </div>
        <input
            id={label.toLowerCase().replace(' ', '-')}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
        />
    </div>
);

const Toggle: React.FC<{ label: string; checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ label, checked, onChange }) => (
    <label htmlFor="display-cursor" className="flex items-center justify-between cursor-pointer">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        <div className="relative">
            <input type="checkbox" id="display-cursor" className="sr-only" checked={checked} onChange={onChange} />
            <div className="block bg-slate-700 w-12 h-6 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? 'translate-x-6 bg-pink-400' : ''}`}></div>
        </div>
    </label>
);


const BallpitControls: React.FC<BallpitControlsProps> = ({
    followCursor, onFollowCursorChange,
    count, onCountChange,
    gravity, onGravityChange,
    friction, onFrictionChange,
    wallBounce, onWallBounceChange,
    lightIntensity, onLightIntensityChange,
    ambientIntensity, onAmbientIntensityChange,
    minSize, onMinSizeChange,
    maxSize, onMaxSizeChange,
    maxVelocity, onMaxVelocityChange,
}) => {
    return (
        <div className="fixed bottom-16 right-4 z-20 p-4 bg-slate-900/60 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 w-64 animate-fade-in">
            <div className="max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 space-y-4">
                <Toggle
                    label="Display Cursor"
                    checked={followCursor}
                    onChange={(e) => onFollowCursorChange(e.target.checked)}
                />
                <hr className="border-slate-700" />
                <Slider
                    label="Ball Count"
                    value={count}
                    onChange={(e) => onCountChange(Number(e.target.value))}
                    min={10} max={300} step={10}
                />
                <Slider
                    label="Gravity"
                    value={gravity}
                    onChange={(e) => onGravityChange(Number(e.target.value))}
                    min={0} max={1} step={0.01}
                />
                <Slider
                    label="Friction"
                    value={friction}
                    onChange={(e) => onFrictionChange(Number(e.target.value))}
                    min={0.8} max={0.999} step={0.001}
                />
                <Slider
                    label="Wall Bounce"
                    value={wallBounce}
                    onChange={(e) => onWallBounceChange(Number(e.target.value))}
                    min={0.5} max={1} step={0.01}
                />
                 <hr className="border-slate-700" />
                 <Slider
                    label="Light Intensity"
                    value={lightIntensity}
                    onChange={(e) => onLightIntensityChange(Number(e.target.value))}
                    min={0} max={500} step={10}
                />
                <Slider
                    label="Ambient Intensity"
                    value={ambientIntensity}
                    onChange={(e) => onAmbientIntensityChange(Number(e.target.value))}
                    min={0} max={2} step={0.1}
                />
                <Slider
                    label="Min Ball Size"
                    value={minSize}
                    onChange={(e) => onMinSizeChange(Number(e.target.value))}
                    min={0.1} max={5} step={0.1}
                />
                <Slider
                    label="Max Ball Size"
                    value={maxSize}
                    onChange={(e) => onMaxSizeChange(Number(e.target.value))}
                    min={0.1} max={5} step={0.1}
                />
                 <Slider
                    label="Max Velocity"
                    value={maxVelocity}
                    onChange={(e) => onMaxVelocityChange(Number(e.target.value))}
                    min={0.01} max={0.5} step={0.01}
                />
            </div>
        </div>
    );
};

export default BallpitControls;
