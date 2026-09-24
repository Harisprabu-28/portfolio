import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(once = true, margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: margin as any })
  return { ref, isInView }
}
