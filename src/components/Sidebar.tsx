import * as Accordion from '@radix-ui/react-accordion'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import type { NavigationItem } from '../config/navigation'
import { navigation } from '../config/navigation'
import './Sidebar.css'

interface SidebarProps {
  currentPath?: string
  isOpen?: boolean
  onClose?: () => void
}

function isActive(path: string | undefined, currentPath: string): boolean {
  if (!path) return false
  return currentPath === path || currentPath.startsWith(`${path}/`)
}

function hasActiveChild(item: NavigationItem, currentPath: string): boolean {
  if (isActive(item.path, currentPath)) return true
  if (item.children) {
    return item.children.some((child) => hasActiveChild(child, currentPath))
  }
  return false
}

interface NavItemProps {
  item: NavigationItem
  currentPath: string
  level: number
}

function NavItem({ item, currentPath, level }: NavItemProps) {
  const hasChildren = item.children && item.children.length > 0
  const active = isActive(item.path, currentPath)

  // リンクのみの項目
  if (item.path && !hasChildren) {
    return (
      <div className={`nav-item level-${level}`}>
        <a href={item.path} className={`nav-link ${active ? 'active' : ''}`}>
          {item.title}
        </a>
      </div>
    )
  }

  // 子要素がある項目（Accordionで表示）
  if (hasChildren) {
    return (
      <Accordion.Item
        value={item.title}
        className={`accordion-item level-${level}`}
      >
        <Accordion.Header>
          <Accordion.Trigger className="accordion-trigger">
            <ChevronRightIcon className="chevron-icon" aria-hidden="true" />
            {item.path ? (
              <a
                href={item.path}
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                {item.title}
              </a>
            ) : (
              <span className="nav-label">{item.title}</span>
            )}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="accordion-content">
          <div className="nav-children">
            {item.children?.map((child) => (
              <NavItem
                key={child.title}
                item={child}
                currentPath={currentPath}
                level={level + 1}
              />
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    )
  }

  return null
}

// 全ての親要素（childrenを持つ項目）のタイトルを収集
function getAllParentTitles(items: NavigationItem[]): string[] {
  const titles: string[] = []

  function collect(items: NavigationItem[]) {
    for (const item of items) {
      if (item.children && item.children.length > 0) {
        titles.push(item.title)
        collect(item.children)
      }
    }
  }

  collect(items)
  return titles
}

export function Sidebar({
  currentPath = '',
  isOpen = false,
  onClose,
}: SidebarProps) {
  // デフォルトで全てのアコーディオンを開く
  const defaultValue = getAllParentTitles(navigation)

  // モバイルでサイドバーが開いているときに背景スクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* モバイル用オーバーレイ */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav">
          {/* モバイル用トップナビゲーション */}
          <div className="mobile-top-nav">
            <a href="/" className="mobile-nav-link">
              Home
            </a>
            <a href="/get-started" className="mobile-nav-link">
              Get Started
            </a>
            <a href="/about" className="mobile-nav-link">
              About
            </a>
            <a
              href="https://github.com/breaking-brake/cc-wf-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
            >
              GitHub
            </a>
          </div>

          <Accordion.Root
            type="multiple"
            defaultValue={defaultValue}
            className="nav-list"
          >
            {navigation.map((item) => (
              <NavItem
                key={item.title}
                item={item}
                currentPath={currentPath}
                level={0}
              />
            ))}
          </Accordion.Root>
        </nav>
      </aside>
    </>
  )
}
