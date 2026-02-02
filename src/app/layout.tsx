import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Baha Lounge - Restaurant & Shisha',
  description: 'Baha-Lounge & Shisha Restaurant offering a memorable dining experience with seating for up to 100 guests, including our charming open-air garden lounge.',
  keywords: 'restaurant, shisha, lounge, London, steak, brisket, dining',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
