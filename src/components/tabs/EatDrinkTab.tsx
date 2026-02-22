const RESTAURANTS = [
  {
    name: "La Paloma",
    type: "Mediterranean • Farm-to-table",
    desc: "Hidden garden restaurant in San Lorenzo. Organic, locally-sourced dishes in a magical garden setting.",
    price: "€€€",
    mustTry: "Grilled octopus & homemade pasta",
  },
  {
    name: "Café Mambo",
    type: "Beach Bar • International",
    desc: "Legendary sunset spot in San Antonio. Famous for pre-party drinks and DJ sets as the sun dips.",
    price: "€€",
    mustTry: "Frozen daiquiri & paella",
  },
  {
    name: "Can Caus",
    type: "Traditional • Grill House",
    desc: "Family-run countryside grill near Santa Gertrudis. Pick your meat from the counter, they grill it perfectly.",
    price: "€€",
    mustTry: "Iberian pork chop & grilled vegetables",
  },
  {
    name: "S'Escalinata",
    type: "Café • Brunch",
    desc: "Charming terrace café on the steps of Dalt Vila. Perfect for people-watching over coffee and pastries.",
    price: "€",
    mustTry: "Ensaïmada & fresh orange juice",
  },
];

export default function EatDrinkTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">🍽️ Eat & Drink</h3>
      {/* INSERT OPENAI API CALL HERE */}
      {RESTAURANTS.map((r, i) => (
        <div key={i} className="glass p-5 glow-hover transition-all">
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-foreground font-bold">{r.name}</h4>
            <span className="text-foreground/60 text-xs font-semibold">{r.price}</span>
          </div>
          <p className="text-turquoise text-xs font-medium">{r.type}</p>
          <p className="text-foreground/70 text-sm mt-2">{r.desc}</p>
          <p className="text-foreground/90 text-xs mt-2 font-medium">🍴 Must try: {r.mustTry}</p>
        </div>
      ))}
    </div>
  );
}
