import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'
import { supabase, type Product } from '@/lib/supabase'
import { STORE_ID } from '@/lib/config'
import { toast } from 'sonner'

export const ProductShowcase = () => {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('store_id', STORE_ID)
        .eq('title', 'AETHER - Liquid Chrome Slip-On')
        .single()

      if (error) throw error
      setProduct(data)
      
      // Set first size as default
      if (data?.variants && Array.isArray(data.variants) && data.variants.length > 0) {
        setSelectedSize((data.variants[0] as any).title || '')
      }
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (!product) return
    
    const variants = product.variants as any[]
    const variant = variants?.find((v: any) => v.title === selectedSize)
    
    if (variant) {
      addItem(product, variant)
      toast.success('Added to cart!', {
        description: `AETHER ${selectedSize}`
      })
    }
  }

  if (loading || !product) {
    return (
      <section className="py-32 px-4 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse text-primary font-space-mono">Loading...</div>
        </div>
      </section>
    )
  }

  const variants = product.variants as any[] || []
  const images = product.images || []

  return (
    <section className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card group">
              {images.length > 0 && (
                <img
                  src={images[0]}
                  alt="AETHER Slip-On"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              )}
              
              {/* Floating Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Discount Badge */}
            {product.compare_at_price && product.compare_at_price > product.price && (
              <div className="absolute top-6 right-6 glass-card px-6 py-3 rounded-full">
                <span className="font-space-mono font-bold text-lg neon-pink">
                  -{Math.round((1 - product.price / product.compare_at_price) * 100)}%
                </span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary text-primary font-space-mono text-xs uppercase tracking-widest">
                  Limited Edition
                </span>
                <span className="px-4 py-1 rounded-full bg-secondary/10 border border-secondary text-secondary font-space-mono text-xs uppercase tracking-widest">
                  Batch 001
                </span>
              </div>
              
              <h2 className="font-syne font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
                {product.title}
              </h2>
              
              <p className="font-space-mono text-muted-foreground text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-4">
              <span className="font-syne font-bold text-5xl text-white">
                ${product.price}
              </span>
              {product.compare_at_price && product.compare_at_price > product.price && (
                <span className="font-space-mono text-2xl text-muted-foreground line-through pb-1">
                  ${product.compare_at_price}
                </span>
              )}
            </div>

            {/* Size Selection */}
            {variants.length > 0 && (
              <div className="space-y-4">
                <label className="block font-space-mono text-sm text-muted-foreground uppercase tracking-widest">
                  Select Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {variants.map((variant: any) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedSize(variant.title)}
                      className={`glass-card px-6 py-4 rounded-xl font-space-mono font-bold transition-all duration-300 ${
                        selectedSize === variant.title
                          ? 'border-2 border-primary bg-primary/10 text-primary'
                          : 'border border-white/10 text-white hover:border-primary/50'
                      }`}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              size="lg"
              className="w-full py-8 text-lg font-space-mono font-bold bg-primary hover:bg-primary/90 text-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Add to Cart</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-primary translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-50" />
            </Button>

            {/* Stock Warning */}
            <div className="glass-card p-4 rounded-xl border border-secondary/50">
              <p className="font-space-mono text-sm text-secondary text-center">
                ⚡ Only {variants.reduce((sum: number, v: any) => sum + (v.inventory_quantity || 0), 0)} pairs remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}