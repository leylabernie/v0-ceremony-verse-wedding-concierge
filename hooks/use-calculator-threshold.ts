'use client'
import { useEffect, useRef } from 'react'
import { captureEvent, type Calculator } from '@/lib/analytics'

/** Report an upward crossing, not every keystroke above the same threshold. */
export function useCalculatorThreshold(calculator: Calculator, rule: string, active: boolean, value: number) {
  const wasActive = useRef(false)
  useEffect(() => {
    if (active && !wasActive.current) captureEvent({ name: 'calc_threshold_triggered', properties: { calculator, threshold_type: rule, value } })
    wasActive.current = active
  }, [calculator, rule, active, value])
}
