export default {
  title: 'Due Date',
  description: 'Indian Compliance Due Dates as per all laws.',
  lang: 'en-US',

  // Vitepress Config
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Due Date',
    logo: '/favicon.svg',
    editLink: {
      pattern: 'https://github.com/madrecha/duedate/edit/draft/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/madrecha/duedate' }
    ],
    footer: {
      message: 'Released under the Open Sourse GPL 3.0 License',
    },
  },

  // HTML head tags
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Adarsh Madrecha' }],
    ['meta', { property: 'og:title', content: 'Due Date' }],
    ['meta', { property: 'og:image', content: 'https://date.jamku.app/favicon.png' }],
    ['meta', { property: 'og:description', content: 'Database of Due Date for Indian Laws' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@adarshmadrecha' }],
    ['meta', { name: 'twitter:image', content: 'https://vueuse.org/favicon.png' }],
  ],
}
