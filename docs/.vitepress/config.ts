import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja',
  title: 'Claude Code Workflow Studio',
  description: 'Documentation for cc-wf-studio — workflows, release automation, and schema references',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/release-automation' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'AI Coding Tools Config', link: '/guide/ai-coding-tools-config' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Release Automation', link: '/reference/release-automation' },
            { text: 'Schema Maintenance', link: '/reference/schema-maintenance' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/breaking-brake/cc-wf-studio' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 breaking-brake',
    },
    search: {
      provider: 'local',
    },
  },
})
