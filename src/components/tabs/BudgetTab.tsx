const BUDGET_ITEMS = [
  { category: "Vlucht & Vervoer", amount: 369, color: "bg-turquoise" },
  { category: "Verblijf (5 nights)", amount: 600, color: "bg-coral" },
  { category: "Eten & Drinken", amount: 350, color: "bg-sunny" },
  { category: "Activiteiten", amount: 180, color: "bg-soft-pink" },
];

export default function BudgetTab() {
  const total = BUDGET_ITEMS.reduce((s, b) => s + b.amount, 0);
  const budget = 2000;
  const remaining = budget - total;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">💰 Budget Breakdown</h3>
      {/* INSERT OPENAI API CALL HERE */}

      <div className="glass p-5">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-foreground/60 text-xs">Total Budget</p>
            <p className="text-3xl font-bold text-foreground">€{budget.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-foreground/60 text-xs">Remaining</p>
            <p className="text-xl font-bold text-turquoise">€{remaining}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex mb-6">
          {BUDGET_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`h-full ${item.color}`}
              style={{ width: `${(item.amount / budget) * 100}%` }}
            />
          ))}
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          {BUDGET_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm text-foreground/80">{item.category}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">€{item.amount}</span>
                <span className="text-xs text-foreground/50">{Math.round((item.amount / budget) * 100)}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-4 pt-4 flex justify-between">
          <span className="text-sm font-semibold text-foreground">Totaal Geschat</span>
          <span className="text-lg font-bold text-foreground">€{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
