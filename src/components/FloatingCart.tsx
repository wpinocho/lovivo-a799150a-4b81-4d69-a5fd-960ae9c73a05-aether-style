import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useCartUI } from "@/components/CartProvider"

export const FloatingCart = () => {
  const { getTotalItems } = useCart()
  const { openCart } = useCartUI()
  const totalItems = getTotalItems()

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={openCart}
        className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl glow-cyan group relative overflow-hidden"
        size="icon"
      >
        <div className="relative z-10">
          <ShoppingCart className="h-7 w-7 text-black transition-transform group-hover:scale-110" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center font-space-mono glow-pink">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-primary opacity-0 group-hover:opacity-30 transition-opacity" />
      </Button>
    </div>
  )
}