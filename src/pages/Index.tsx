import { useState } from "react";
import type { DateRange } from "react-day-picker";
import DestinationInput from "@/components/DestinationInput";
import DateRangeSelector from "@/components/DateRangeSelector";
import VibeSelector from "@/components/VibeSelector";
import LoadingState from "@/components/LoadingState";
import ResultsDashboard from "@/components/ResultsDashboard";

const SURPRISE_DESTINATIONS = ["Ibiza", "Bali", "Santorini", "Maui", "Amalfi Coast", "Mykonos", "Tulum", "Phuket"];

type AppState = "form" | "loading" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("form");
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [budget, setBudget] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [customVibe, setCustomVibe] = useState("");

  const handleSurprise = () => {
    const rand = SURPRISE_DESTINATIONS[Math.floor(Math.random() * SURPRISE_DESTINATIONS.length)];
    setDestination(rand);
  };

  const toggleVibe = (id: string) => {
    setSelectedVibes(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    // INSERT OPENAI API CALL HERE
    setAppState("loading");
    setTimeout(() => setAppState("results"), 2500);
  };

  const handleBack = () => {
    setAppState("form");
  };

  if (appState === "loading") {
    return (
      <div className="summer-bg min-h-screen flex items-center justify-center">
        <LoadingState />
      </div>
    );
  }

  if (appState === "results") {
    return (
      <div className="summer-bg min-h-screen">
        <ResultsDashboard destination={destination || "Ibiza"} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="summer-bg min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Hero Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-foreground tracking-tight mb-2">Curato</h1>
          <p className="text-foreground/80 text-sm font-medium">
            Your Dream Trip, Planned in Seconds.
          </p>
        </div>

        {/* Glass Form Card */}
        <div className="glass p-6 space-y-5">
          {/* Destination */}
          <DestinationInput
            value={destination}
            onChange={setDestination}
            onSurprise={handleSurprise}
          />

          {/* Dates */}
          <DateRangeSelector dateRange={dateRange} onChange={setDateRange} />

          {/* Budget & Travelers row */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-foreground/70 font-medium mb-1 block">Budget (€)</label>
              <input
                type="text"
                value={budget}
                onChange={e => setBudget(e.target.value)}
                placeholder="2000"
                className="glass-input w-full py-3 px-4 text-sm"
              />
            </div>
            <div className="w-24">
              <label className="text-xs text-foreground/70 font-medium mb-1 block">Travelers</label>
              <input
                type="number"
                min={1}
                max={20}
                value={travelers}
                onChange={e => setTravelers(e.target.value)}
                className="glass-input w-full py-3 px-4 text-sm text-center"
              />
            </div>
          </div>

          {/* Vibes */}
          <VibeSelector
            selected={selectedVibes}
            onToggle={toggleVibe}
            customVibe={customVibe}
            onCustomVibeChange={setCustomVibe}
          />

          {/* Submit */}
          <button onClick={handleSubmit} className="btn-coral w-full py-4 text-base">
            ☀️ Plan My Summer Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
