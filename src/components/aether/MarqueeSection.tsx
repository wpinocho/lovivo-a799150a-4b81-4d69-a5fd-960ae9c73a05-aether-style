export const MarqueeSection = () => {
  const marqueeText = "LIMITED DROP // BATCH 001 // SOLD OUT IMMINENT // "
  
  return (
    <section className="py-8 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
      <div className="relative flex">
        {/* First Marquee */}
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span 
              key={`marquee-1-${i}`}
              className="inline-block px-4 font-space-mono font-bold text-2xl md:text-4xl text-black tracking-wider"
            >
              {marqueeText}
            </span>
          ))}
        </div>
        
        {/* Second Marquee (for seamless loop) */}
        <div 
          className="flex whitespace-nowrap animate-marquee absolute top-0"
          style={{ animation: 'marquee 30s linear infinite' }}
          aria-hidden="true"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span 
              key={`marquee-2-${i}`}
              className="inline-block px-4 font-space-mono font-bold text-2xl md:text-4xl text-black tracking-wider"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}