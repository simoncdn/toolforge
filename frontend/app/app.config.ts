export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'neutral'
    }
  },
  uiPro: {
		 pageGrid: {
      base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
    },
		footer: {
      slots: {
        root: 'border-t border-default',
				left: 'text-sm text-muted'
      }
    }
  },
	header: {
    to: '/',
    search: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/simoncdn/toolforge',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `© ${new Date().getFullYear()} - Simon Cardona`,
  }
})
