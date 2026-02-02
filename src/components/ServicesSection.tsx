import Link from 'next/link'
import { Utensils, Wine, Users, Clock } from 'lucide-react'

const services = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Experience exquisite cuisine prepared by our expert chefs',
  },
  {
    icon: Wine,
    title: 'Shisha Lounge',
    description: 'Premium shisha selection in our charming garden lounge',
  },
  {
    icon: Users,
    title: 'Private Events',
    description: 'Host your special occasions with us for up to 100 guests',
  },
  {
    icon: Clock,
    title: 'All Day Service',
    description: 'We provide exquisite services for our customers across the day',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-title">events</p>
          <h2 className="section-heading">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide exquisite services for our customers across the day. 
            Private booking is welcome for personal events, contact us to find out more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-6 bg-dark hover:bg-dark-card transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about" className="btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
