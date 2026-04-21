import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const docsSidebar = [
  {
    text: 'Docs',
    items: [
      { text: 'Overview', link: '/docs/' },
      { text: 'What is CC Workflow Studio', link: '/docs/what-is' },
      { text: 'Installation', link: '/docs/installation' },
      { text: 'Quick Start', link: '/docs/quick-start' },
      { text: 'Nodes', link: '/docs/nodes' },
      { text: 'Integrations', link: '/docs/integrations' },
      { text: 'Edit with AI', link: '/docs/edit-with-ai' },
      { text: 'Workflow JSON Schema', link: '/docs/workflow-schema' },
    ],
  },
]

export default withMermaid(defineConfig({
  lang: 'en-US',
  title: 'CC Workflow Studio',
  description: 'Documentation for CC Workflow Studio — visual AI workflow editor for VS Code',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
    ],
    sidebar: {
      '/docs/': docsSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/breaking-brake/cc-wf-studio' },
    ],
    footer: {
      copyright: 'Copyright © 2025 breaking-brake',
    },
    search: {
      provider: 'local',
    },
  },
}))
