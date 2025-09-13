import React from 'react'
import style from './HorizontalLine.module.css'
import { motion } from 'framer-motion'

export default function HorizontalLine() {
  return (
    <>
       {/* horizental line */}
        <motion.div
          initial={{ originX: 0.5, scaleX: 0 }}
          whileInView={{ originX: 1, scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
          className={`w-full h-1 bg-white mt-6 `}
        ></motion.div>
    </>
  )
}
