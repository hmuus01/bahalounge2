'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  '/images/food/IMG_0573.jpg',
  '/images/food/IMG_0543.jpg',
  '/images/food/IMG_0538.jpg',
  '/images/food/IMG_0524.jpg',
  '/images/food/IMG_0523.jpg',
  '/images/food/IMG_0518.jpg',
  '/images/food/IMG_0517.jpg',
  '/images/food/IMG_0516.jpg',
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-title">events</p>
          <h2 className="section-heading">Our Gallery</h2>
          <p className="text-gray-300">
            Check out our latest pics and social media feed, don&apos;t forget to share and upload your experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={selectedImage}
            alt="Gallery image"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  )
}
