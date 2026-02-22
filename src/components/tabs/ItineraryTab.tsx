const DAYS = [
  {
    day: "Day 1",
    title: "Arrival & Sunset Vibes",
    activities: [
      "🛬 Arrive at Ibiza Airport, taxi to San Antonio",
      "🏨 Check in at Hotel Pikes",
      "🌅 Sunset drinks at Café Mambo",
      "🍽️ Dinner at Villa Mercedes",
    ],
  },
  {
    day: "Day 2",
    title: "Beach & Old Town",
    activities: [
      "🏖️ Morning at Cala Bassa beach",
      "🛥️ Boat trip to Formentera (half-day)",
      "🏛️ Explore Dalt Vila (UNESCO Old Town)",
      "🎉 Evening at Pacha or Amnesia",
    ],
  },
  {
    day: "Day 3",
    title: "Hidden Gems & Markets",
    activities: [
      "🧘 Morning yoga at Casa Maca",
      "🛍️ Las Dalias Hippy Market",
      "🏖️ Afternoon at Cala Comte",
      "🍷 Wine tasting at Ibiza Wine Tours",
    ],
  },
  {
    day: "Day 4",
    title: "Adventure Day",
    activities: [
      "🚤 Kayaking around Es Vedrà",
      "🤿 Snorkeling at Cala Xarraca",
      "📸 Sunset at Es Vedrà viewpoint",
      "🍽️ Farewell dinner at La Paloma",
    ],
  },
  {
    day: "Day 5",
    title: "Departure",
    activities: [
      "☕ Leisurely breakfast at hotel",
      "🛍️ Last-minute shopping in Ibiza Town",
      "🛬 Transfer to airport",
    ],
  },
];

export default function ItineraryTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">🗺️ Day-by-Day Itinerary</h3>
      {/* INSERT OPENAI API CALL HERE */}
      {DAYS.map((day, i) => (
        <div key={i} className="glass p-5 glow-hover transition-all">
          <div className="flex items-center gap-3 mb-3">
            <span className="glass-subtle px-3 py-1 text-xs font-bold text-turquoise">{day.day}</span>
            <h4 className="text-foreground font-semibold text-sm">{day.title}</h4>
          </div>
          <ul className="space-y-2">
            {day.activities.map((a, j) => (
              <li key={j} className="text-foreground/80 text-sm">{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
