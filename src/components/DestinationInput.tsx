import { useState } from "react";

const DESTINATIONS = [
  "Ibiza", "Bali", "Santorini", "Maui", "Amalfi Coast", "Barcelona",
  "Mykonos", "Phuket", "Dubrovnik", "Cancún", "Maldives", "Tulum",
  "Nice", "Capri", "Zanzibar", "Thailand", "Greece", "Portugal"
];

interface DestinationInputProps {
  value: string;
  onChange: (val: string) => void;
  onSurprise: () => void;
}

export default function DestinationInput({ value, onChange, onSurprise }: DestinationInputProps) {
  const [open, setOpen] = useState(false);
  const filtered = value.length > 0
    ? DESTINATIONS.filter(d => d.toLowerCase().includes(value.toLowerCase()))
    : DESTINATIONS.slice(0, 6);

  return (
    <div className="relative">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">🔍</span>
          <input
            type="text"
            value={value}
            onChange={e => { onChange(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
            placeholder="Where next? (e.g., Bali, Amalfi...)"
            className="glass-input w-full py-3 pl-10 pr-4 text-sm"
          />
        </div>
        <button
          onClick={onSurprise}
          className="glass-input px-4 py-3 text-sm font-medium whitespace-nowrap glow-hover"
        >
          Surprise me ✨
        </button>
      </div>
      {open && filtered.length > 0 && (
        <div className="absolute z-50 mt-2 w-full glass p-2 space-y-1">
          {filtered.map(dest => (
            <button
              key={dest}
              className="w-full text-left px-3 py-2 text-sm text-foreground rounded-lg hover:bg-white/10 transition-colors"
              onMouseDown={() => { onChange(dest); setOpen(false); }}
            >
              {dest}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
