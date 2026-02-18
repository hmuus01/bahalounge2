'use client'

import { useState, useEffect } from 'react'

export default function RamadanPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('ramadanPopupSeen')) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('ramadanPopupSeen', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.3s ease-out' }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative bg-dark border border-primary/30 max-w-md w-full p-8 text-center"
        style={{ animation: 'scaleIn 0.3s ease-out' }}
      >
        <div className="text-5xl mb-4">🌙</div>
        <h2 className="text-2xl font-serif text-primary mb-4">Ramadan Mubarak!</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Please note that our Sunday Roast will be taking a break during the holy month
          and will return after Eid (mid-March).
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Thank you for your understanding.
        </p>
        <button
          onClick={handleClose}
          className="btn-primary px-10"
        >
          OK
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
