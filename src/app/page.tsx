import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CategorySection from '@/components/CategorySection'
import StorySection from '@/components/StorySection'
import MenuSection from '@/components/MenuSection'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import BookingSection from '@/components/BookingSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <StorySection />
      <MenuSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
    </>
  )
}
