import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

export const AetherHeader = () => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src="/logo.png"
              alt="AETHER Logo"
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="font-syne text-3xl font-bold neon-cyan">AETHER</span>';
              }}
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-space-mono text-sm uppercase tracking-widest">
            <a 
              href="#specs" 
              className="text-white/70 hover:text-primary transition-colors duration-300"
            >
              Specs
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-primary transition-colors duration-300"
            >
              Story
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-primary transition-colors duration-300"
            >
              Support
            </a>
          </nav>

          {/* Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            className="relative hover:bg-white/5 transition-all duration-300 group"
            aria-label="View cart"
          >
            <ShoppingCart className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center font-space-mono">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}