import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import './MobileMenuToggle.css'

interface MobileMenuToggleProps {
  onToggle?: () => void
}

export function MobileMenuToggle({ onToggle }: MobileMenuToggleProps) {
  const handleClick = () => {
    if (onToggle) {
      onToggle()
    } else {
      // カスタムイベントを発行
      window.dispatchEvent(new CustomEvent('toggle-mobile-menu'))
    }
  }

  return (
    <button
      type="button"
      className="mobile-menu-toggle"
      onClick={handleClick}
      aria-label="Toggle mobile menu"
    >
      <HamburgerMenuIcon className="hamburger-icon" />
    </button>
  )
}
