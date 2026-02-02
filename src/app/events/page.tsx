import Link from 'next/link'
import { PartyPopper, Briefcase, Heart, Gift, Users, UtensilsCrossed, Phone, Mail, UserCheck, ChefHat, LayoutGrid, Wine, Speaker, Sparkles } from 'lucide-react'

const eventTypes = [
  {
    icon: PartyPopper,
    title: 'Birthday Celebrations',
    description: 'Make your special day unforgettable with our bespoke birthday packages and dedicated service.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events & Meetings',
    description: 'Impress clients and colleagues in our sophisticated setting with tailored catering options.',
  },
  {
    icon: Heart,
    title: 'Engagement Parties',
    description: 'Celebrate your love story in style with an intimate gathering or grand celebration.',
  },
  {
    icon: Gift,
    title: 'Anniversary Dinners',
    description: 'Mark your milestone with a romantic evening of fine dining and exceptional service.',
  },
  {
    icon: Users,
    title: 'Family Gatherings',
    description: 'Bring the whole family together for a memorable feast in our spacious venue.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Private Dining Experiences',
    description: 'Exclusive dining for intimate groups with personalised menus and attentive service.',
  },
]

const offerings = [
  { icon: UserCheck, text: 'Dedicated event coordinator' },
  { icon: ChefHat, text: 'Customisable menus with our signature steaks, briskets & shisha' },
  { icon: LayoutGrid, text: 'Flexible room layouts and seating arrangements' },
  { icon: Wine, text: 'Premium drinks packages available' },
  { icon: Speaker, text: 'State-of-the-art sound system' },
  { icon: Sparkles, text: 'Complimentary decorations for special occasions' },
]

const packages = [
  {
    name: 'Intimate Gathering',
    capacity: 'Up to 20 guests',
    features: [
      'Reserved seating area',
      'Set menu options',
      'Dedicated server',
      'Complimentary welcome drinks',
    ],
  },
  {
    name: 'Celebration Package',
    capacity: 'Up to 50 guests',
    features: [
      'Private section of venue',
      'Customisable menu',
      'Event coordinator',
      'Drinks packages available',
      'Basic decorations included',
    ],
  },
  {
    name: 'Grand Event',
    capacity: 'Up to 100 guests',
    features: [
      'Exclusive venue hire',
      'Bespoke menu planning',
      'Dedicated event manager',
      'Premium drinks packages',
      'Full decoration service',
      'Sound system & microphone',
    ],
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center">
        <div
          className="absolute inset-0 animate-pan"
          style={{ backgroundImage: 'url(/images/background.JPG)', backgroundSize: 'auto 100%' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="section-title mb-4">Create Unforgettable Moments</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Private Events & Celebrations</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create unforgettable moments at Baha Lounge
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Host Your Special Occasion</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you&apos;re planning an intimate gathering or a grand celebration, Baha Lounge offers
              the perfect setting. With seating for up to 100 guests and our charming open-air garden
              lounge, we&apos;ll help make your event truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-title">What We Host</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Event Types</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-dark-lighter p-8 text-center hover:bg-dark-card transition-all duration-300 border border-gray-800 hover:border-primary group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-title">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-dark rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <offering.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-300">{offering.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-title">Choose Your Experience</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Event Packages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-dark-lighter border border-gray-800 hover:border-primary transition-colors duration-300"
              >
                <div className="p-8 text-center border-b border-gray-800">
                  <h3 className="text-2xl font-serif text-white mb-2">{pkg.name}</h3>
                  <p className="text-primary font-semibold">{pkg.capacity}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <p className="text-gray-400 text-sm text-center">Contact us for pricing</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Plan Your Event?</h2>
            <p className="text-gray-300 text-lg mb-10">
              Get in touch with our events team to discuss your requirements and create a bespoke package for your special occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a
                href="tel:07908812345"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                079 0881 2345
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:hello@bahalounge.com" className="hover:text-primary transition-colors">
                hello@bahalounge.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
