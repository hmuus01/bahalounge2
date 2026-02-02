import Image from 'next/image'

const menuItems = [
  {
    name: 'Bavette Steak',
    description: 'Flank Cut Steak Served Medium, Sliced with Tallow Glaze and Cilantro Salsa',
  },
  {
    name: 'Beef Brisket',
    description: 'Oak Smoked Beef Brisket Served with Pink Pickled Onions and House BBQ Sauce',
  },
  {
    name: 'Châteaubriand',
    description: 'Reserve Black Angus Fillet Medallion Reverse Sear Served Sliced with Smokey Chipotle',
  },
  {
    name: 'Fire Kissed Bird',
    description: 'Quarter, Half or Whole Chicken Fire Roasted Glazed with Siracha Oils Served with House BBQ',
  },
  {
    name: 'Te Mana Rack of Lamb',
    description: 'New Zealand Lamb Slow Cooked over Wood Fire Served with Salsa Roja on a Texas Toast',
  },
  {
    name: 'Rib Eye Steak',
    description: 'Black Label Argentine Rib Eye Loin Oak Smoked Served Sliced with Red Chimichurri',
  },
  {
    name: 'Baha Pearl Prawn',
    description: 'Fire Roasted BBQ Prawns, Shell on, Served on Garlic Mash and Creamy Naga Sauce',
  },
  {
    name: 'Brisket Bun',
    description: 'Oak Smoked Brisket with House BBQ Sauce and House Pickles in a Toasted Bun',
  },
]

export default function MenuSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-title">our menu</p>
          <h2 className="section-heading">Try Our Specials</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Menu Items */}
          <div className="space-y-8">
            {menuItems.slice(0, 4).map((item) => (
              <div key={item.name} className="group">
                <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors duration-300 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="hidden lg:block">
            <Image
              src="/images/food/featured-dish.jpg"
              alt="Featured Dish"
              width={400}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Menu Items */}
          <div className="space-y-8">
            {menuItems.slice(4, 8).map((item) => (
              <div key={item.name} className="group">
                <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors duration-300 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
