import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { ReactNode } from 'react'

interface RadixThemeProviderProps {
  children: ReactNode
}

export function RadixThemeProvider({ children }: RadixThemeProviderProps) {
  return (
    <Theme
      accentColor="violet"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      {children}
    </Theme>
  )
}
