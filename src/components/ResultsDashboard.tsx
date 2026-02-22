import { useState } from "react";
import TransportTab from "./tabs/TransportTab";
import StayTab from "./tabs/StayTab";
import BudgetTab from "./tabs/BudgetTab";
import ItineraryTab from "./tabs/ItineraryTab";
import EatDrinkTab from "./tabs/EatDrinkTab";
import TipsTab from "./tabs/TipsTab";

const TABS = [
  { id: "transport", emoji: "✈️", label: "Transport" },
  { id: "stay", emoji: "🛏️", label: "Stay" },
  { id: "budget", emoji: "💰", label: "Budget" },
  { id: "itinerary", emoji: "🗺️", label: "Itinerary" },
  { id: "eat", emoji: "🍽️", label: "Eat & Drink" },
  { id: "tips", emoji: "💡", label: "Tips" },
];

interface ResultsDashboardProps {
  destination: string;
  onBack: () => void;
}

export default function ResultsDashboard({ destination, onBack }: ResultsDashboardProps) {
  const [activeTab, setActiveTab] = useState("transport");

  const renderTab = () => {
    switch (activeTab) {
      case "transport": return <TransportTab />;
      case "stay": return <StayTab />;
      case "budget": return <BudgetTab />;
      case "itinerary": return <ItineraryTab />;
      case "eat": return <EatDrinkTab />;
      case "tips": return <TipsTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 pb-28">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pt-6">
        <button onClick={onBack} className="glass-input p-2 glow-hover">
          <span className="text-lg">←</span>
        </button>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Your {destination} Trip</h2>
          <p className="text-foreground/70 text-sm">Curated just for you</p>
        </div>
      </div>

      {/* Tab content */}
      <div className="mb-6">
        {renderTab()}
      </div>

      {/* Sticky bottom tab bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg">
        <div className="tab-pill p-1.5 flex gap-1 overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-0 px-2 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id ? "tab-active text-foreground" : "text-foreground/70"
              }`}
            >
              <span className="block text-base">{tab.emoji}</span>
              <span className="block mt-0.5">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
