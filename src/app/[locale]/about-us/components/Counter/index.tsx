'use client'

import { FC, useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

export const Counter: FC<{ count: number }> = ({ count }) => {
  const countMotion = useMotionValue(0)
  const rounded = useTransform(countMotion, Math.round)

  useEffect(() => {
    const animation = animate(countMotion, count, {
      duration: 1.5
    })
  }, [])

  return <motion.span>{rounded}</motion.span>
}
