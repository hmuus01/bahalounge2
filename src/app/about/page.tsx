import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">About Us</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-title">our story</p>
              <h2 className="section-heading">Welcome to Baha Lounge</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Baha-Lounge & Shisha Restaurant is now open, offering a memorable dining 
                experience with seating for up to 100 guests, including our charming 
                open-air garden lounge.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our smoker-oven cooking brings out rich, authentic flavours that you 
                won&apos;t find anywhere else. From our signature Bavette Steak to our 
                Oak Smoked Beef Brisket, every dish is prepared with care and expertise.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Enjoy it all in our garden lounge with premium shisha and drinks, 
                creating the perfect atmosphere for any occasion.
              </p>
              <Link href="/reservation" className="btn-primary">
                Book a Table
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/bahalounge_about_us.JPG"
                alt="Baha Lounge Interior"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-4xl font-serif text-primary mb-4">Up to 100</div>
              <h3 className="text-xl font-serif text-white mb-2">Guest Capacity</h3>
              <p className="text-gray-400">Seating for up to 100 guests including our garden lounge</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-serif text-primary mb-4">★★★★★</div>
              <h3 className="text-xl font-serif text-white mb-2">Premium Quality</h3>
              <p className="text-gray-400">Only the finest ingredients and authentic cooking methods</p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl font-serif text-primary mb-4">♨</div>
              <h3 className="text-xl font-serif text-white mb-2">Shisha Lounge</h3>
              <p className="text-gray-400">Premium shisha selection in our charming garden setting</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
