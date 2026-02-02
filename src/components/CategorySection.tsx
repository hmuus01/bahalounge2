const BurgerIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-primary fill-none stroke-[2]">
    {/* Top bun */}
    <path d="M15 45 Q15 25 50 25 Q85 25 85 45 Z" />
    {/* Sesame seeds */}
    <ellipse cx="35" cy="35" rx="3" ry="2" className="fill-primary stroke-none" />
    <ellipse cx="50" cy="32" rx="3" ry="2" className="fill-primary stroke-none" />
    <ellipse cx="65" cy="35" rx="3" ry="2" className="fill-primary stroke-none" />
    {/* Lettuce */}
    <path d="M12 50 Q20 55 28 48 Q36 55 44 48 Q52 55 60 48 Q68 55 76 48 Q84 55 88 50" />
    {/* Patty */}
    <rect x="15" y="54" width="70" height="12" rx="2" />
    {/* Cheese */}
    <path d="M12 68 L20 75 L35 68 L50 75 L65 68 L80 75 L88 68" />
    {/* Bottom bun */}
    <path d="M15 78 L85 78 Q85 88 50 88 Q15 88 15 78 Z" />
  </svg>
)

const SteakIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-primary fill-none stroke-[2]">
    {/* Steak outline */}
    <path d="M20 35 Q10 50 20 65 Q35 80 55 75 Q80 70 85 50 Q90 30 70 25 Q50 20 35 25 Q25 28 20 35 Z" />
    {/* Fat marbling */}
    <path d="M30 40 Q40 45 35 55" />
    <path d="M50 35 Q55 45 50 55" />
    <path d="M65 40 Q70 50 65 60" />
    {/* Bone */}
    <ellipse cx="25" cy="50" rx="8" ry="12" />
    <circle cx="25" cy="42" r="4" className="fill-primary" />
    <circle cx="25" cy="58" r="4" className="fill-primary" />
  </svg>
)

const BrisketIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-primary fill-none stroke-[2]">
    {/* Main meat slab */}
    <path d="M15 40 Q10 50 15 60 L20 70 Q50 75 80 70 L85 60 Q90 50 85 40 Q80 30 50 30 Q20 30 15 40 Z" />
    {/* Smoke lines */}
    <path d="M30 20 Q35 15 30 10" />
    <path d="M50 18 Q55 12 50 6" />
    <path d="M70 20 Q75 15 70 10" />
    {/* Meat grain lines */}
    <path d="M25 45 L75 45" />
    <path d="M25 55 L75 55" />
    <path d="M30 65 L70 65" />
    {/* Fat cap */}
    <path d="M15 40 Q50 35 85 40" className="stroke-[3]" />
  </svg>
)

const RoastIcon = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-primary fill-none stroke-[2]">
    {/* Chicken body */}
    <ellipse cx="50" cy="55" rx="30" ry="25" />
    {/* Drumsticks */}
    <path d="M25 65 Q15 75 20 85 Q25 88 28 85 Q32 80 30 70" />
    <path d="M75 65 Q85 75 80 85 Q75 88 72 85 Q68 80 70 70" />
    {/* Wing hints */}
    <path d="M25 50 Q15 45 18 40 Q22 38 28 45" />
    <path d="M75 50 Q85 45 82 40 Q78 38 72 45" />
    {/* Garnish/steam lines */}
    <path d="M40 25 Q45 20 40 15" />
    <path d="M50 22 Q55 16 50 10" />
    <path d="M60 25 Q65 20 60 15" />
    {/* Roast lines on body */}
    <path d="M35 50 Q50 45 65 50" />
    <path d="M35 60 Q50 55 65 60" />
  </svg>
)

const categories = [
  { name: 'Burgers', Icon: BurgerIcon },
  { name: 'Steaks', Icon: SteakIcon },
  { name: 'Briskets', Icon: BrisketIcon },
  { name: 'Roast', Icon: RoastIcon },
]

export default function CategorySection() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-title">category</p>
          <h2 className="section-heading">Freshest finest ingredients</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group text-center cursor-pointer"
            >
              <div className="relative h-48 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <category.Icon />
              </div>
              <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
