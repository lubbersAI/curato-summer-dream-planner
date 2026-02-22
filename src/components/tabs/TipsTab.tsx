const TIPS = [
  {
    icon: "🌡️",
    title: "Weather Forecast",
    content: "July in Ibiza: 28–33°C, sunny with clear skies. UV index is high — sunscreen SPF 50+ is essential.",
  },
  {
    icon: "👜",
    title: "Packing Essentials",
    content: "Swimwear, light linen clothes, comfortable walking sandals, sunglasses, hat, reef-safe sunscreen, a light jacket for evenings.",
  },
  {
    icon: "💶",
    title: "Money & Payments",
    content: "Euro (€) is the currency. Cards are widely accepted. Tip 5–10% at restaurants. ATMs are everywhere.",
  },
  {
    icon: "🚌",
    title: "Getting Around",
    content: "Rent a scooter (€30/day) or car (€45/day) for freedom. Local buses (Ibiza Bus) connect major towns. Taxis are pricey at night.",
  },
  {
    icon: "🗣️",
    title: "Language",
    content: "Spanish & Catalan are official. English is widely spoken in tourist areas. Learn 'Hola', 'Gracias', and 'La cuenta, por favor'.",
  },
  {
    icon: "🔌",
    title: "Practicalities",
    content: "Type C/F plugs (EU standard). Tap water is safe but bottled is preferred. Free WiFi is common at cafés and hotels.",
  },
];

export default function TipsTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">💡 Local Tips & Info</h3>
      {/* INSERT OPENAI API CALL HERE */}
      {TIPS.map((tip, i) => (
        <div key={i} className="glass p-5 glow-hover transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{tip.icon}</span>
            <h4 className="text-foreground font-bold text-sm">{tip.title}</h4>
          </div>
          <p className="text-foreground/80 text-sm">{tip.content}</p>
        </div>
      ))}
    </div>
  );
}
