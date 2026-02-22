const TRANSPORT = [
  {
    type: "Flight",
    route: "Amsterdam (AMS) → Ibiza (IBZ)",
    airline: "Transavia",
    time: "Dep 08:45 — Arr 11:30",
    price: "€189",
    note: "Direct flight, 2h45m",
  },
  {
    type: "Flight",
    route: "Amsterdam (AMS) → Ibiza (IBZ)",
    airline: "Vueling",
    time: "Dep 14:20 — Arr 17:05",
    price: "€145",
    note: "Direct flight, 2h45m",
  },
  {
    type: "Airport Transfer",
    route: "Ibiza Airport → Hotel",
    airline: "Private Taxi",
    time: "On arrival",
    price: "€35",
    note: "~20 min to San Antonio",
  },
];

export default function TransportTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">✈️ Transport Options</h3>
      {/* INSERT OPENAI API CALL HERE */}
      {TRANSPORT.map((t, i) => (
        <div key={i} className="glass p-5 glow-hover transition-all">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-turquoise uppercase tracking-wider">{t.type}</span>
            <span className="text-lg font-bold text-foreground">{t.price}</span>
          </div>
          <p className="text-foreground font-semibold text-sm">{t.route}</p>
          <p className="text-foreground/70 text-xs mt-1">{t.airline} • {t.time}</p>
          <p className="text-foreground/50 text-xs mt-1">{t.note}</p>
          <button className="btn-coral w-full mt-4 py-2.5 text-sm">Book</button>
        </div>
      ))}
    </div>
  );
}
