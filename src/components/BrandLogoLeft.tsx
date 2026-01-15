export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.png"
        alt="AETHER Logo"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="font-syne text-2xl font-bold neon-cyan">AETHER</span>';
        }}
      />
    </a>
  )
}