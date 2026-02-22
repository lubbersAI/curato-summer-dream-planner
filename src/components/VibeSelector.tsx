import { useState } from "react";

const VIBES = [
  { id: "beach", emoji: "🏖️", label: "Strand" },
  { id: "adventure", emoji: "⛰️", label: "Avontuur" },
  { id: "culture", emoji: "🏛️", label: "Cultuur" },
  { id: "party", emoji: "🎉", label: "Feest" },
  { id: "relax", emoji: "😌", label: "Relax" },
  { id: "nature", emoji: "🌲", label: "Natuur" },
];

interface VibeSelectorProps {
  selected: string[];
  onToggle: (id: string) => void;
  customVibe: string;
  onCustomVibeChange: (val: string) => void;
}

export default function VibeSelector({ selected, onToggle, customVibe, onCustomVibeChange }: VibeSelectorProps) {
  const [showCustom, setShowCustom] = useState(false);

  return (
    <div>
      <p className="text-sm font-semibold text-foreground mb-3">What's the vibe?</p>
      <div className="flex flex-wrap gap-2">
        {VIBES.map(vibe => (
          <button
            key={vibe.id}
            onClick={() => onToggle(vibe.id)}
            className={`glass-input px-4 py-2.5 text-sm font-medium transition-all glow-hover ${
              selected.includes(vibe.id)
                ? "bg-white/25 border-white/50 shadow-lg shadow-turquoise/20"
                : ""
            }`}
          >
            {vibe.emoji} {vibe.label}
          </button>
        ))}
        <button
          onClick={() => setShowCustom(!showCustom)}
          className={`glass-input px-4 py-2.5 text-sm font-medium glow-hover ${
            showCustom ? "bg-white/25 border-white/50" : ""
          }`}
        >
          ✨ Anders...
        </button>
      </div>
      {showCustom && (
        <input
          type="text"
          value={customVibe}
          onChange={e => onCustomVibeChange(e.target.value)}
          placeholder="Describe your vibe..."
          className="glass-input w-full py-3 px-4 text-sm mt-3"
        />
      )}
    </div>
  );
}
