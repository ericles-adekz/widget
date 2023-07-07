'use client'

import { useState } from 'react'

import Image from 'next/image'

import Steps from './steps'
import Counter from './counter'
import Card from './card'

//import { Modal as Props } from '../../types/modal'
import { FiX } from 'react-icons/fi'
import {
  FaChartPie,
  FaCarAlt,
  FaIndustry,
  FaStore,
  FaTools,
} from 'react-icons/fa'
import { IoIosHome, IoMdRocket } from 'react-icons/io'
import { MdAccountBalance } from 'react-icons/md'

import './modal.css'
import Tax from './tax'

const times = [{ time: 12 }, { time: 24 }, { time: 48 }, { time: 36 }]

const garantee = [
  { id: 1, icon: <FaChartPie size={30} />, label: 'Investimento' },
  { id: 2, icon: <IoIosHome size={32} />, label: 'Imóvel' },
  { id: 3, icon: <FaCarAlt size={34} />, label: 'Veículo' },
  { id: 4, icon: <MdAccountBalance size={32} />, label: 'Recebíveis' },
]

const businessActivity = [
  { id: 1, icon: <FaIndustry size={30} />, label: 'Industria' },
  { id: 2, icon: <FaStore size={32} />, label: 'Imóvel' },
  { id: 3, icon: <FaTools size={34} />, label: 'Veículo' },
  { id: 4, icon: <IoMdRocket size={32} />, label: 'Recebíveis' },
]

export default function Modal({ onClick }) {
  const [timesActive, setTimesActive] = useState(12)
  const [garanteeActive, setGaranteeActive] = useState(0)
  const [actualStep, setActualStep] = useState(1)
  const [tax, setTax] = useState('2,45')

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-end w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex-col w-full h-screen max-w-md p-4 bg-white md:w-1/2 lg:w-1/3 xl:w-1/4 justify-space-between dark:bg-slate-900">
        <div className="flex items-start justify-between mb-5">
          <div>
            <Image
              src="https://placehold.co/160x40/22c55d/FFFFFF.png"
              width={160}
              height={40}
              alt=""
            />
          </div>
          <button
            type="button"
            onClick={onClick}
            className="cursor-pointer unset"
          >
            <FiX size={28} />
          </button>
        </div>
        <Steps active={actualStep}></Steps>
        {actualStep == 1 && (
          <div className="">
            <div className="form-group">
              <h2 className="label">Quanto quer emprestado?</h2>
              <Counter />
            </div>
            <div>
              <h2 className="label">Em quantas vezes?</h2>
              <div className="h-16 cards">
                {times.map(({ time }) => (
                  <Card
                    key={time}
                    active={timesActive === time}
                    onClick={() => setTimesActive(time)}
                  >
                    <p className="text-lg font-bold">{time}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="label">Dar como garantia meu...</h2>
              <div className="h-20 cards">
                {garantee.map(({ id, icon, label }) => (
                  <Card
                    key={`garantee_${id}`}
                    active={id === garanteeActive}
                    onClick={() => setGaranteeActive(id)}
                  >
                    <div className="flex flex-col items-center justify-center h-20">
                      <div className="flex items-center justify-center w-12 h-12">
                        {icon}
                      </div>
                      <p className="text-[10px] font-bold tracking-tight[-0.015rem]">
                        {label}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
        {actualStep == 2 && (
          <>
            <Tax tax={tax}></Tax>
            <div className="form-group">
              <label htmlFor="name">Seu nome *</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Telefone *</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                className="form-control"
                required
              />
            </div>
          </>
        )}
        {actualStep == 3 && (
          <>
            <Tax tax={tax} />
            <div className="h-20 cards">
              {businessActivity.map(({ id, icon, label }) => (
                <Card
                  key={`garantee_${id}`}
                  active={id === garanteeActive}
                  onClick={() => setGaranteeActive(id)}
                >
                  <div className="flex flex-col items-center justify-center h-20">
                    <div className="flex items-center justify-center w-12 h-12">
                      {icon}
                    </div>
                    <p className="text-[10px] font-bold tracking-tight[-0.015rem]">
                      {label}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="website">Possui site?</label>
              <input
                type="url"
                name="website"
                id="website"
                className="form-control"
                required
              />
            </div>
          </>
        )}

        <div className="flex items-center w-full gap-4 justify-space-between">
          <button
            type="button"
            className="w-full btn btn-default"
            onClick={() => setActualStep(actualStep - 1)}
          >
            Voltar
          </button>
          <button
            type="button"
            className="w-full btn btn-primary"
            onClick={() => setActualStep(actualStep + 1)}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
