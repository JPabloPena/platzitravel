import { createContext } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

export const DarkModeContext = createContext()

export function DarkModeProvider ({ children }) {
  const darkMode = useDarkMode()

  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  )
}
