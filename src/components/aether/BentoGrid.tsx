import { useState } from 'react'

interface TechSpec {
  id: string
  title: string
  description: string
  className?: string
}

const techSpecs: TechSpec[] = [
  {
    id: '1',
    title: 'Zero-Gravity Sole',
    description: '3D-printed honeycomb structure reduces weight by 40% while maintaining superior cushioning',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    title: 'Adaptive Fit',
    description: 'Memory polymer conforms to your unique foot shape after 3 wears',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: '3',
    title: 'Liquid Chrome Finish',
    description: 'Holographic polymer shifts between silver, pink, and cyan in motion',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: '4',
    title: '360° Support',
    description: 'Engineered exoskeleton wraps around heel and arch for maximum stability',
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    id: '5',
    title: 'Breathable Matrix',
    description: 'Parametric ventilation pattern optimizes airflow in high-heat zones',
    className: 'md:col-span-2 md:row-span-1'
  }
]

export const BentoGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="specs" className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-syne font-bold text-5xl md:text-7xl text-white mb-4">
            TECH SPECS
          </h2>
          <p className="font-space-mono text-muted-foreground text-sm tracking-widest">
            ENGINEERED FOR THE FUTURE
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {techSpecs.map((spec) => (
            <div
              key={spec.id}
              className={`glass-card p-8 rounded-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden ${spec.className || ''}`}
              onMouseEnter={() => setHoveredId(spec.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Hover Glow Effect */}
              {hoveredId === spec.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse" />
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-50 blur-sm -z-10" />
                </>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-3 group-hover:neon-cyan transition-all duration-300">
                  {spec.title}
                </h3>
                <p className="font-space-mono text-sm text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}