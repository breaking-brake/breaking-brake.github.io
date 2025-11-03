export interface NavigationItem {
  title: string
  path?: string
  children?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  {
    title: 'Blog',
    path: '/blog',
    children: [
      {
        title: 'Quick Start Tutorial',
        path: '/blog/002-quick-start-tutorial',
      },
      {
        title: 'FAQ',
        path: '/blog/005-faq',
      },
      {
        title: 'Use Cases',
        path: '/use-case',
        children: [
          {
            title: 'Data Analysis Workflow',
            path: '/use-case/data-analysis',
          },
          {
            title: 'Code Review Workflow',
            path: '/use-case/code-review',
          },
        ],
      },
    ],
  },
]
