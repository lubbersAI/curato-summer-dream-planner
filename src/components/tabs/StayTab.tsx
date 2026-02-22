const STAYS = [
  {
    name: "Hotel Pikes Ibiza",
    type: "Boutique Hotel",
    vibe: "Iconic party-chic heritage hotel",
    price: "€180/night",
    rating: "⭐ 4.8",
    features: ["Pool", "Restaurant", "Bar", "Live music"],
  },
  {
    name: "Hostal La Torre",
    type: "Boutique B&B",
    vibe: "Sunset cliff-side retreat",
    price: "€120/night",
    rating: "⭐ 4.6",
    features: ["Sea view", "Sunset terrace", "Café"],
  },
  {
    name: "Casa Maca Farmhouse",
    type: "Agriturismo",
    vibe: "Rustic countryside charm",
    price: "€95/night",
    rating: "⭐ 4.7",
    features: ["Pool", "Farm-to-table", "Yoga", "Gardens"],
  },
];

export default function StayTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">🛏️ Where to Stay</h3>
      {/* INSERT OPENAI API CALL HERE */}
      {STAYS.map((s, i) => (
        <div key={i} className="glass p-5 glow-hover transition-all">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="text-foreground font-bold">{s.name}</h4>
              <p className="text-foreground/60 text-xs">{s.type} • {s.vibe}</p>
            </div>
            <span className="text-xs text-foreground/70">{s.rating}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {s.features.map(f => (
              <span key={f} className="glass-subtle px-2.5 py-1 text-xs text-foreground/80">{f}</span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-foreground">{s.price}</span>
            <button className="btn-coral px-6 py-2.5 text-sm">Book</button>
          </div>
        </div>
      ))}
    </div>
  );
}
