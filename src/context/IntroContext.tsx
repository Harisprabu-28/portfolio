import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface IntroContextType {
  introComplete: boolean
  markIntroComplete: () => void
}

const IntroContext = createContext<IntroContextType>({
  introComplete: false,
  markIntroComplete: () => {},
})

export function IntroProvider({ children }: { children: ReactNode }) {
  // If the intro was already seen this session, start as complete immediately
  const [introComplete, setIntroComplete] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('hp_portfolio_intro_seen')
    }
    return false
  })

  const markIntroComplete = () => setIntroComplete(true)

  return (
    <IntroContext.Provider value={{ introComplete, markIntroComplete }}>
      {children}
    </IntroContext.Provider>
  )
}

export function useIntro() {
  return useContext(IntroContext)
}
