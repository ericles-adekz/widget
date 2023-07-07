'use client'

import { useState } from 'react'

import { FiMinus, FiPlus } from 'react-icons/fi'

export default function Counter() {
  const [amount, setAmount] = useState(1000000)

  const handleValue = (value: number | string) => {
    if (typeof value === 'string') {
      setAmount(parseInt(value, 10))
    } else {
      setAmount(value)
    }
  }

  return (
    <div className="w-full">
      <div className="flex row justify-between items-center mb-1">
        <button
          type="button"
          className="flex justify-center items-center w-8 h-8"
        >
          <FiMinus strokeWidth={3} size={22} />
        </button>
        <input
          type="number"
          defaultValue={amount}
          value={amount}
          className="bg-transparent text-center appearance-none border-transparent focus:border-transparent focus:ring-0"
          onChange={(e) => handleValue(e.target.value)}
          step={1000000}
        />
        <button
          type="button"
          className="flex justify-center items-center w-8 h-8"
        >
          <FiPlus strokeWidth={3} size={22} />
        </button>
      </div>
      <input
        type="range"
        min={1000000}
        max={10000000}
        defaultValue={amount}
        step={500000}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  )
}
