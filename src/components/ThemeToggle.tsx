import { Toggle } from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import './ThemeToggle.css'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // 初期化: localStorageからテーマを読み込む
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setIsDark(savedTheme === 'dark')
    applyTheme(savedTheme)
  }, [])

  // Radix Themeのappearanceを設定
  const applyTheme = (theme: string) => {
    const themeElement = document.querySelector('[data-is-root-theme="true"]')
    if (themeElement) {
      themeElement.setAttribute('data-accent-color', 'violet')
      themeElement.setAttribute('data-gray-color', 'slate')
      themeElement.setAttribute('data-radius', 'medium')
      themeElement.setAttribute('data-scaling', '100%')

      if (theme === 'light') {
        themeElement.setAttribute('class', 'radix-themes light')
        themeElement.setAttribute('data-appearance', 'light')
      } else if (theme === 'dark') {
        themeElement.setAttribute('class', 'radix-themes dark')
        themeElement.setAttribute('data-appearance', 'dark')
      }
    }
  }

  // テーマ切り替え
  const handleToggle = (pressed: boolean) => {
    const newTheme = pressed ? 'dark' : 'light'
    setIsDark(pressed)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={handleToggle}
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      {isDark ? (
        <MoonIcon className="theme-icon" />
      ) : (
        <SunIcon className="theme-icon" />
      )}
    </Toggle>
  )
}
