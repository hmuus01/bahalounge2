'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you shortly.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Contact Us</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="section-title">location</p>
              <h2 className="section-heading">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Address</h3>
                    <p className="text-gray-400">
                      BAHA-LOUNGE RESTAURANT & SHISHA<br />
                      2-6 DEANCROSS STREET<br />
                      LONDON E1 2QA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email Address</h3>
                    <a
                      href="mailto:HELLO@BAHALOUNGE.COM"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      HELLO@BAHALOUNGE.COM
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Call Us</h3>
                    <a
                      href="tel:07908812345"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      079 0881 2345
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.962329047158!2d-0.05772032323614764!3d51.513907110227755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760318c078c3f7%3A0x5665f696fd3cbd3c!2sBaha%20Lounge!5e0!3m2!1sen!2suk!4v1769810169646!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=""
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark p-8 lg:p-12">
              <h3 className="text-2xl font-serif text-white mb-2">Leave a Message</h3>
              <p className="text-gray-400 mb-8">We&apos;re ready to help you</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-dark-lighter border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none resize-none"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
