import type { ReactNode } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

interface LayoutWrapperProps {
  currentPath: string
  children: ReactNode
}

export function LayoutWrapper({ currentPath, children }: LayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev)
  }, [])

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
  }, [])

  // カスタムイベントをリッスン
  useEffect(() => {
    window.addEventListener('toggle-mobile-menu', toggleSidebar)

    return () => {
      window.removeEventListener('toggle-mobile-menu', toggleSidebar)
    }
  }, [toggleSidebar])

  return (
    <div className="layout-wrapper">
      <Sidebar
        currentPath={currentPath}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className="content-wrapper">
        {children}
        <Footer />
      </div>
    </div>
  )
}
