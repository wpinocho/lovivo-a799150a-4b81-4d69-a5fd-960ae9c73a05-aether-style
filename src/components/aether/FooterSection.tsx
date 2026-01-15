import { useState } from 'react'

export const FooterSection = () => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null)
  const letters = ['A', 'E', 'T', 'H', 'E', 'R']

  const getLetterColor = (index: number) => {
    if (hoveredLetter === null) return 'white'
    if (hoveredLetter === index) return 'hsl(var(--neon-cyan))'
    const distance = Math.abs(hoveredLetter - index)
    if (distance === 1) return 'hsl(var(--hot-pink))'
    return 'white'
  }

  return (
    <footer className="py-32 px-4 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Giant AETHER Text */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 md:gap-6">
            {letters.map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
                className="font-syne font-black text-6xl md:text-9xl lg:text-[12rem] leading-none cursor-pointer transition-all duration-300 hover:scale-110"
                style={{ 
                  color: getLetterColor(index),
                  textShadow: hoveredLetter === index 
                    ? '0 0 40px hsl(var(--neon-cyan)), 0 0 80px hsl(var(--neon-cyan))'
                    : 'none'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-space-mono font-bold text-white uppercase tracking-widest mb-4">
              Product
            </h4>
            <ul className="space-y-2 font-space-mono text-sm text-muted-foreground">
              <li><a href="#specs" className="hover:text-primary transition-colors">Tech Specs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sizing Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-mono font-bold text-white uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2 font-space-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-mono font-bold text-white uppercase tracking-widest mb-4">
              Support
            </h4>
            <ul className="space-y-2 font-space-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-space-mono font-bold text-white uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2 font-space-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-space-mono text-xs text-muted-foreground">
            © 2025 AETHER. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}