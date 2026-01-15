import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleNotifyClick = () => {
    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(270, 80%, 40%) 0%, transparent 70%)',
            animation: 'aurora 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(189, 100%, 60%) 0%, transparent 70%)',
            animation: 'aurora 10s ease-in-out infinite 2s'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(220, 100%, 55%) 0%, transparent 70%)',
            animation: 'aurora 12s ease-in-out infinite 4s'
          }}
        />
      </div>

      {/* Ambient Light Following Cursor */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
          animation: 'glow-pulse 4s ease-in-out infinite'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="font-syne font-bold text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tighter">
            <span style={{ fontSize: '100px' }} className="block text-white">THE</span>
            <span style={{ fontSize: '90px' }} className="block neon-cyan">FUTURE</span>
            <span style={{ fontSize: '90px' }} className="block text-white">IS FLUID</span>
          </h1>

          {/* Subtitle */}
          <p className="font-space-mono text-muted-foreground text-lg md:text-xl tracking-wider">
            AETHER // BATCH 001 // LIMITED EDITION
          </p>

          {/* CTA Button with Magnetic Effect */}
          <div className="pt-8">
            <Button
              onClick={handleNotifyClick}
              size="lg"
              className="relative px-12 py-8 text-lg font-space-mono font-bold bg-transparent border-2 border-primary hover:bg-primary/10 text-primary uppercase tracking-widest transition-all duration-300 group overflow-hidden"
              style={{
                transform: `translate(${(mousePosition.x - (heroRef.current?.offsetWidth || 0) / 2) / 50}px, ${(mousePosition.y - (heroRef.current?.offsetHeight || 0) / 2) / 50}px)`
              }}
            >
              <span className="relative z-10">Notify Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}