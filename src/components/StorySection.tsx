import Image from 'next/image'
import Link from 'next/link'

export default function StorySection() {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/bahalounge_main.jpg"
              alt="Baha Lounge Interior"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary hidden lg:block"></div>
          </div>

          {/* Content */}
          <div>
            <p className="section-title">events</p>
            <h2 className="section-heading">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              <strong className="text-white">Baha-Lounge & Shisha Restaurant is now open</strong>, 
              offering a memorable dining experience with seating for{' '}
              <strong className="text-white">up to 100 guests</strong>, including our charming 
              open-air garden lounge.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our smoker-oven cooking brings out rich, authentic flavours. Enjoy it all 
              in our garden lounge with premium shisha and drinks.
            </p>
            <Link href="/about" className="btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
