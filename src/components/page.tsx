'use client'

import { useState } from 'react'

import { FiX } from 'react-icons/fi'

import { AnimatePresence, motion } from 'framer-motion'

import Counter from './counter'
import Modal from './modal'

export default function V1() {
  const [button, setButton] = useState(false)
  const [modal, setModal] = useState(true)

  const handleButton = () => {
    setButton(!button)
  }

  const handleModal = () => {
    setModal(!modal)
  }

  const container = () => {
    return {
      hidden: { opacity: 1, scale: 0, transition: { duration: 0.3 } },
      show: {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        transition: {
          delay: 3,
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    }
  }

  return (
    <AnimatePresence>
      {button ? (
        <motion.button
          type="button"
          onClick={handleButton}
          className="absolute w-16 h-16 rounded-full bottom-8 right-8 bg-green-600 flex justify-center items-center"
          variants={container()}
          initial="show"
          exit="hidden"
          layout
        >
          aqui
        </motion.button>
      ) : modal ? (
        <AnimatePresence>
          <Modal onClick={handleModal}></Modal>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            variants={container()}
            initial="show"
            exit="hidden"
            layout
            className="flex flex-col justify-between absolute bottom-8 right-8 bg-white dark:bg-gray-900 w-80 h-48 p-4 rounded-2xl"
          >
            <div className="flex row justify-between items-center">
              <h4>Quanto você quer emprestado?</h4>
              <button type="button" onClick={handleButton}>
                <FiX strokeWidth={3} />
              </button>
            </div>
            <div className="">
              <Counter />
            </div>
            <button
              type="button"
              className="w-full h-11 rounded-lg dark:text-green-950 bg-green-600 font-weight-bold"
              onClick={() => handleModal()}
            >
              Simular
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </AnimatePresence>
  )
}
