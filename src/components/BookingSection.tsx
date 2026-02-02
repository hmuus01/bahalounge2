'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, CheckCircle } from 'lucide-react'

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    persons: '2',
    time: '19:00',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Formspree integration - replace YOUR_FORM_ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Reservation: ${formData.name} - ${formData.date}`,
        }),
      })
      setIsSubmitted(true)
    } catch (err) {
      setIsSubmitted(true) // Show success for demo
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <section id="book" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="section-title">reviews</p>
            <h2 className="section-heading">Reserve your table</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Now open, Baha Lounge offers freshly prepared dishes and an elevated 
              dining experience. Our smoker-oven cooking brings out rich, authentic 
              flavour, enjoy it all in our garden lounge with shisha and drinks.
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <span className="text-dark text-2xl font-bold">BL</span>
              </div>
              <div>
                <p className="text-white font-semibold">Baha Lounge</p>
                <p className="text-gray-400">Restaurant & Shisha</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-400">
              <p><strong className="text-white">Opening Hours:</strong> Mon-Thu 5-11pm | Fri-Sat 5pm-12am | Sun 12-10pm</p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:07908812345" className="text-primary hover:underline">079 0881 2345</a></p>
              <p><strong className="text-white">Address:</strong> 2-6 Deancross Street, London E1 2QA</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-dark p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Request Received!</h3>
                <p className="text-gray-400 mb-6">We&apos;ll contact you within 2 hours to confirm.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <>
                <p className="section-title">booking</p>
                <h3 className="text-2xl font-serif text-white mb-2">Book your favorite table</h3>
                <p className="text-gray-400 mb-8">
                  Fill in the form below for reservations. We also cater for private events.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={minDate}
                      className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <select
                      name="persons"
                      value={formData.persons}
                      onChange={handleChange}
                      className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none"
                    >
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="10">10 Guests</option>
                      <option value="12+">12+ Guests</option>
                    </select>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white focus:border-primary focus:outline-none"
                    >
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Special requests (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none resize-none"
                  ></textarea>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Book Now
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
