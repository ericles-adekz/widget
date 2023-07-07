import { motion } from 'framer-motion'

interface Props {
  active?: boolean
  children: React.ReactNode
  onClick: () => void
}

export default function Card({ active = false, children, onClick }: Props) {
  return (
    <motion.div
      className={`w-full h-full flex justify-center items-center text-teal-950 rounded-lg cursor-pointer transition-all ${
        active ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-200'
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  )
}
