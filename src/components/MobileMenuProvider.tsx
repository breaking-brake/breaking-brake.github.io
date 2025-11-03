import { type ReactNode, createContext, useContext, useState } from 'react'

interface MobileMenuContextType {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined,
)

export function useMobileMenu() {
  const context = useContext(MobileMenuContext)
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider')
  }
  return context
}

interface MobileMenuProviderProps {
  children: ReactNode
}

export function MobileMenuProvider({ children }: MobileMenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </MobileMenuContext.Provider>
  )
}
