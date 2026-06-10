import { useEffect, useRef, useState } from 'react'

export function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)

  useEffect(() => {
    const startTime = Date.now()
    const diff = end - start

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const newCount = Math.floor(start + diff * easeOut)

      if (newCount !== countRef.current) {
        countRef.current = newCount
        setCount(newCount)
      }

      if (progress === 1) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [end, duration, start])

  return count
}
