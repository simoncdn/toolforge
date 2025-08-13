export default defineAppConfig({
  ui: {
    colors: {
      primary: 'black',
      neutral: 'neutral'
    }
  },
  uiPro: {
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
