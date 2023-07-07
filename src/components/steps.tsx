import { useState } from 'react'

//import { Steps as Props } from '@/types/steps'

import './steps.css'

export default function Steps({ active = 1 }) {
  const totalSteps = [1, 2, 3, 4]
  return (
    <div className="flex justify-between items-center w-full h-10">
      {totalSteps.map((step) => (
        <div key={step} className={`circle ${active >= step && 'active'}`}>
          {step}
        </div>
      ))}
    </div>
  )
}
