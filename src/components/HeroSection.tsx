import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-video.mov" type="video/quicktime" />
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
          Discover a new level<br />of taste
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Experience exquisite dining at Baha Lounge with our signature steaks, 
          briskets, and premium shisha in our charming garden lounge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservation" className="btn-primary">
            Book a Table
          </Link>
          <Link href="/menu" className="btn-outline">
            Explore Our Menu
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
