module.exports = {
  // base: "/blog/",
  title: 'Xss\'Blog',
  description: 'Be interesting and have a soul',
  dest: './public',
  head: [
    ['link', {'rel': 'icon', 'href': '/img/favicon.ico'}],
    ['meta', {'name': 'viewport', 'content': 'width=device-width,initial-scale=1,user-scalable=no'}]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: 'bycgxss',
    logo: '/img/avatar.png',
    authorAvatar: '/img/avatar.png',
    startYear: '2020',
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    subSidebar: 'auto',
    blogConfig: {
      category: {location: 2, text: 'Article'},
      tag: {location: 3, text: 'Tag'}
    },
    search: true,
    searchMaxSuggestions: 10,
    valineConfig: {
      appId: 'NeRTpwKavcK3qG2kXh6th8WY-gzGzoHsz',
      appKey: 'BbAbgTR9l2t7FROR6LxGWCcR', 
    }
  },
  markdown: {lineNumbers: true}
}