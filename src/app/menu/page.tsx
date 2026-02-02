import Link from 'next/link'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  name: string
  description?: string
  items: MenuItem[]
}

// Menu data - easy to update!
const menuData: Record<string, MenuCategory> = {
  starters: {
    name: 'Starters',
    items: [
      { name: 'Fire Pit Wings', description: 'Choice of Tossed Sauce: Creamy Chilli Sauce, House BBQ or Hot Honey', price: '£8' },
      { name: 'Steak Bites', description: 'Bavette Steak Served Medium with Chimichurri on a Toasted Sourdough Slice', price: '£10' },
      { name: 'Roasted Bone Marrow', description: 'Garlic Roasted Bone Marrow Canoe cut with Freshly Baked Baguette & Gravy', price: '£6' },
      { name: 'Te Mana Lamb Chops', description: 'Fire Roasted Rack of Lamb Served with Salad & Salsa Roja', price: '£12' },
      { name: 'Baha Pearl Prawns', description: 'Fire Roasted Prawns, Shell on, Served with Side Salad and Creamy Chilli Sauce', price: '£12' },
      { name: 'Lamb Tortilla Kebab', description: 'Served with Garlic Yoghurt and Lime', price: '£8' },
      { name: 'Spring Lamb Taco', description: 'Pulled Lamb Shoulder Served on Corn Tortilla with Pink Pickled Onions and Baby Coriander', price: '£8' },
    ]
  },
  premium: {
    name: 'Mains - Premium',
    description: 'Our finest cuts and premium selections',
    items: [
      { name: 'Bavette Steak 100g', description: 'Flank Cut Steak Served Medium, Sliced with Tallow Glaze and Cilantro Salsa', price: '£9' },
      { name: 'Te Mana Rack of Lamb', description: 'New Zealand Lamb Slow Cooked over Wood Fire Served with Salad & Salsa Roja', price: '£25' },
      { name: 'Beef Brisket 100g', description: 'Oak Smoked Beef Brisket Served with Pink Pickled Onions and House BBQ Sauce', price: '£11' },
      { name: 'Rib Eye Steak 100g', description: 'Black Label Argentine Rib Eye Loin Oak Smoked Served Sliced with Red Chimichurri', price: '£12' },
      { name: 'Beef Fillet 100g', description: 'Reserve Black Angus Fillet Medallion Reverse Sear Served Sliced with Garlic Butter', price: '£13' },
    ]
  },
  mains: {
    name: 'Mains',
    items: [
      { name: 'Fire Kissed Bird', description: 'Quarter, Half or Whole Chicken Fire Roasted Glazed with Siracha Oils Served with House BBQ, Half with choice of one side and whole with choice of two sides', price: '£10-£15-£25' },
      { name: 'Chicken Burger', description: 'Crispy Southern Fried Chicken with House Sauce, Creamy Goat Cheese in a Toasted Brioche Bun', price: '£16' },
      { name: 'Brisket Bun', description: 'Oak Smoked Brisket with BBQ and Pickles in a Toasted Bun', price: '£17' },
      { name: 'Smash Burger', description: '2 x 100g Patties, 2 American Cheese Slices with House Sauce in a Toasted Brioche Bun', price: '£16' },
      { name: 'Baha Pearl Prawn', description: 'Fire Roasted BBQ Prawns, Shell on, Served on Garlic Mash and Creamy Chilli Sauce', price: '£25' },
      { name: 'Cauliflower Steak', description: 'Cauliflower Steak Served on Labneh with Chimichurri', price: '£16' },
    ]
  },
  platters: {
    name: 'Platters',
    items: [
      { name: 'Platter for 4 Persons', description: 'Served with Smoked Brisket, Lamb Chops, Bavette Steak, Ribey, Half Chicken, Truffle Mac and Cheese, Fries, Garlic Mash Potatoes, Charred Corn on the Cob', price: '£100' },
      { name: 'Tomahawk', description: 'Served with Choice of 4 Sides and Sauces', price: '£100' },
    ]
  },
  roast: {
    name: 'Roast Dinner',
    items: [
      { name: 'Sunday Roast Dinner', description: 'Choice of Protein: Beef, Lamb or Chicken. Served with Trimmings: Garlic Rosemary Roasted Potatoes, Honey Caramelised Carrots, Maple-Butter Roasted Parsnips, Garlic-Dill Peas, Giant Pudd with a Side of Bone Marrow Gravy', price: '£21' },
    ]
  },
  sides: {
    name: 'Sides',
    items: [
      { name: 'French Fries', description: 'Rosemary Salt Seasoned French Fries', price: '£4' },
      { name: 'Sweet Potato Fries', description: 'Maple Syrup and Cinnamon Seasoned', price: '£5' },
      { name: 'Garlic Mash Potatoes', description: 'Garlic Infused Creamy Mash Potatos', price: '£5' },
      { name: 'Truffle Mac and Cheese', description: '4 Cheese Macaroni, Infuse with Black Truffle', price: '£6' },
      { name: 'Spicy Rice', description: 'Oaxaca Mixed Spicy Rice', price: '£5' },
      { name: 'Charred Corn on the Cob', description: 'Ember Roasted Corn on the Cob, Dipped in Liquid Butter with Maldon Salt', price: '£5' },
      { name: 'Creamy Coleslaw', description: 'Freshly Shredded Cabbage and Carrots Tossed in a Rich, Creamy Dressing', price: '£5' },
      { name: 'Creamy Spinach', description: 'Cooked Beets with Spanish Onions and Feta in a Vinegrate Dressing', price: '£5' },
    ]
  },
  sauces: {
    name: 'Sauces',
    description: '£1.50 each',
    items: [
      { name: 'Chimichurri', description: '', price: '£1.50' },
      { name: 'Salsa Roja', description: '', price: '£1.50' },
      { name: 'Confit Garlic Butter', description: '', price: '£1.50' },
      { name: 'Creamy Chilli Sauce', description: '', price: '£1.50' },
      { name: 'Mushroom Sauce', description: '', price: '£1.50' },
      { name: 'House BBQ', description: '', price: '£1.50' },
      { name: 'House Mayo', description: '', price: '£1.50' },
      { name: 'Bone Marrow Gravy', description: '', price: '£1.50' },
    ]
  },
  breads: {
    name: 'Breads',
    items: [
      { name: 'Garlic Bread', description: 'Served with 2 Slices', price: '£5' },
    ]
  },
  desserts: {
    name: 'Desserts',
    items: [
      { name: 'Chocolate Chip Brownie', description: 'Served Warm with Vanilla Ice Cream', price: '£6.50' },
      { name: 'White Chocolate Cheesecake', description: 'Served with Mango Puree and Pistachio Crumb', price: '£6.50' },
      { name: 'Apple Crumble', description: 'Warm Apple Crumble Served with Hot Vanilla Custard', price: '£6.50' },
      { name: 'Lemon Tart', description: 'Lemon Tart Served with Burnt Marshmallows', price: '£6.50' },
      { name: 'Berry Sorbet', description: 'Refreshing Mixed Berry Sorbet with a Smooth, Fruity Finish', price: '£6.50' },
    ]
  },
  mocktails: {
    name: 'Mocktails',
    items: [
      { name: 'Strawberry Daiquiri', description: '', price: '£10' },
      { name: 'Pina Colada', description: '', price: '£10' },
      { name: 'Blue Lagoon', description: '', price: '£10' },
      { name: 'Mint Mojito', description: '', price: '£8' },
      { name: 'Strawberry Mojito', description: '', price: '£8' },
      { name: 'Lychee Mojito', description: '', price: '£8' },
    ]
  },
  softdrinks: {
    name: 'Soft Drinks',
    items: [
      { name: 'Jarritos Mexican Cola', description: '', price: '£4' },
      { name: 'Jarritos Mandarin', description: '', price: '£4' },
      { name: 'Jarritos Lime', description: '', price: '£4' },
      { name: 'Jarritos Guava', description: '', price: '£4' },
      { name: 'Sprite Zero', description: '', price: '£4' },
      { name: 'Red Bull', description: '', price: '£4.50' },
      { name: 'Water (Still/Sparkling)', description: '', price: '£4' },
    ]
  },
  hotdrinks: {
    name: 'Hot Drinks',
    items: [
      { name: 'Tea/Coffee', description: '', price: '£3.50' },
    ]
  },
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://bahalounge.com/wp-content/uploads/2024/04/IMG_3229.jpeg)' }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="section-title mb-4">Discover Our</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Menu</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Our Menu</span>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 bg-dark-lighter sticky top-[88px] z-40 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(menuData).map(([key, category]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm text-gray-400 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {Object.entries(menuData).map(([key, category]) => (
              <div key={key} id={key} className="mb-20 scroll-mt-40">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  )}
                  <div className="w-24 h-0.5 bg-primary mx-auto mt-6"></div>
                </div>

                {/* Menu Items */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-dark-lighter hover:bg-dark-card transition-all duration-300 border-l-2 border-transparent hover:border-primary"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-primary font-semibold text-lg ml-4 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Notice */}
            <div className="text-center mt-16 p-8 bg-dark-lighter">
              <p className="text-gray-400 mb-4">
                Inform Staff of Allergies.
              </p>
              <p className="text-gray-400">
                A Service Charge of 10% will be added to the bill.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6 text-lg">
                Ready to experience our cuisine?
              </p>
              <Link href="/reservation" className="btn-primary">
                Book Your Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
