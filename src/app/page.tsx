import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import RamadanPopup from '@/components/RamadanPopup'
import CategorySection from '@/components/CategorySection'
import StorySection from '@/components/StorySection'
import MenuSection from '@/components/MenuSection'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import BookingSection from '@/components/BookingSection'

export default function Home() {
  return (
    <>
      <RamadanPopup />
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
