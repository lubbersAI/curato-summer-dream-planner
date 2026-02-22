export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <div className="relative">
        <div className="text-6xl animate-float">☀️</div>
        <div className="absolute -inset-4 rounded-full bg-sunny/20 animate-pulse-glow blur-xl" />
      </div>
      <div className="glass px-8 py-4 text-center">
        <p className="text-foreground font-semibold text-lg">Curating your dream trip...</p>
        <p className="text-foreground/70 text-sm mt-1">Finding the best options just for you</p>
      </div>
      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-foreground/60 animate-pulse-glow"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );
}
