'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, Users, CheckCircle, Phone } from 'lucide-react'

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    persons: '2',
    time: '19:00',
    occasion: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Option 1: Using Formspree (recommended - free, easy setup)
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up at https://formspree.io and create a form
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Reservation: ${formData.name} - ${formData.date} at ${formData.time}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        // If Formspree not set up, show success anyway for demo
        // Remove this else block once you set up Formspree
        setIsSubmitted(true)
      }
    } catch (err) {
      // For demo purposes, show success even if fetch fails
      // Remove this once Formspree is set up
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  // Success state
  if (isSubmitted) {
    return (
      <>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Reservation</h1>
          </div>
        </section>

        <section className="py-20 bg-dark-lighter">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-dark p-12 rounded-lg">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-serif text-white mb-4">
                  Reservation Request Received!
                </h2>
                <p className="text-gray-300 mb-6">
                  Thank you, <span className="text-primary">{formData.name}</span>! We&apos;ve received your reservation request for{' '}
                  <span className="text-primary">{formData.persons} guests</span> on{' '}
                  <span className="text-primary">{formData.date}</span> at{' '}
                  <span className="text-primary">{formData.time}</span>.
                </p>
                <p className="text-gray-400 mb-8">
                  Our team will contact you within 2 hours to confirm your booking. 
                  If you need immediate assistance, please call us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:07908812345"
                    className="btn-outline flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us: 079 0881 2345
                  </a>
                  <Link href="/" className="btn-primary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

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
          <p className="section-title mb-4">Book Your Experience</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Reservation</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Reservation</span>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-dark">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Mon-Thu 5-11pm | Fri-Sat 5pm-12am | Sun 12-10pm</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">Parties up to 100 guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:07908812345" className="font-medium hover:underline">079 0881 2345</a>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Info Sidebar */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif text-white mb-6">Reserve Your Table</h2>
                <p className="text-gray-400 mb-8">
                  Book your table at Baha Lounge and experience our exquisite cuisine 
                  and premium shisha in our charming garden lounge.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-primary font-semibold mb-2">Opening Hours</h3>
                    <p className="text-gray-400">Mon-Thu: <span className="text-white">5pm - 11pm</span></p>
                    <p className="text-gray-400">Fri-Sat: <span className="text-white">5pm - 12am</span></p>
                    <p className="text-gray-400">Sunday: <span className="text-white">12pm - 10pm</span></p>
                  </div>

                  <div>
                    <h3 className="text-primary font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">
                      2-6 Deancross Street<br />
                      London E1 2QA
                    </p>
                  </div>

                  <div>
                    <h3 className="text-primary font-semibold mb-2">Private Events</h3>
                    <p className="text-gray-400">
                      Hosting a special occasion? We cater for private events 
                      and parties up to 100 guests.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-500 text-sm">
                      For same-day reservations or large parties, please call us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-dark p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                          placeholder="079 1234 5678"
                        />
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-sm text-gray-400 mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={minDate}
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="persons" className="block text-sm text-gray-400 mb-2">
                          Number of Guests *
                        </label>
                        <select
                          id="persons"
                          name="persons"
                          value={formData.persons}
                          onChange={handleChange}
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7">7 Guests</option>
                          <option value="8">8 Guests</option>
                          <option value="10">10 Guests</option>
                          <option value="12">12 Guests</option>
                          <option value="15+">15+ (Call us)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm text-gray-400 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="12:00">12:00 PM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="13:30">1:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="occasion" className="block text-sm text-gray-400 mb-2">
                          Occasion
                        </label>
                        <select
                          id="occasion"
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select (Optional)</option>
                          <option value="birthday">Birthday</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="date">Date Night</option>
                          <option value="business">Business Dinner</option>
                          <option value="celebration">Celebration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none resize-none transition-colors"
                        placeholder="Dietary requirements, seating preferences, special arrangements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Request Reservation
                        </>
                      )}
                    </button>

                    <p className="text-gray-500 text-sm text-center">
                      We&apos;ll confirm your reservation within 2 hours via email or phone.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
