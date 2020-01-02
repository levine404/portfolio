const projects = [
  {
    projectName: 'Corella',
    whatIsIt: 'Corella is a cloud based, collaborative CAT system',
    whatDoesItDo: 'Improves the effeciency of translation processes, manages translation data, and streamlines processing of translated documents',
    whoIsItFor: 'Professional translators and linguists',
    screenshots: [
      '/statics/screenshots/corella.png',
      '/statics/screenshots/corella-1.png',
      '/statics/screenshots/corella-2.png',
      '/statics/screenshots/corella-3.png'
    ],
    screenshotWidth: 1200,
    screenshotHeight: 615,
    techStackOverview: [
      'Vue',
      'Node',
      'Express',
      'Mongooose|MongoDB'
    ],
    allTechsUsed: [
      'HTML5',
      'CSS3',
      'SASS',
      'Javascript|ES6+',
      'Quasar',
      'Dexie|IndexedDB',
      'AWS',
      'Heroku',
      'Web Sockets',
      'Service Workers'
    ],
    accomplishments: [
      'Manage translation data between multiple users',
      'Install potentially large assets for offline usage',
      'Manually mange synchronization of data',
      'Limit database calls via local caching on server',
      'Merge Word document styles with translation data',
      'Process potentially large files via streams to avoid overloading server',
      'Create an efficient way to search offline database on the client',
      'Provide translators with automated translation suggestions based on input',
      'Manage flexible glossary-like terms',
      'Support the translation into muliple languages simultaneously',
      'Create a way to make multiple/divided selections',
      'Import glossary terms based on CSV files'
    ],
    demoLink: 'https://www.corella.co',
    demoIntro: 'Project currently in Alpha testing',
    repoLink: 'https://github.com/levine404/corella-excerpts',
    repoIntro: 'A cherry-picked collection of excerpts from code used in production'
  },

  {
    projectName: 'Ulphilas',
    whatIsIt: 'Ulphilas is a cloud based, collaborative CAT system used exclusively for Bible Translation',
    whatDoesItDo: 'Improves the effeciency of translation processes, manages translation data',
    whoIsItFor: 'Bible Translators',
    screenshots: [
      '/statics/screenshots/ulphilas.png',
      '/statics/screenshots/ulphilas-1.png',
      '/statics/screenshots/ulphilas-2.png',
      '/statics/screenshots/ulphilas-3.png',
      '/statics/screenshots/ulphilas-4.png'
    ],
    screenshotWidth: 1200,
    screenshotHeight: 615,
    techStackOverview: [
      'Vue',
      'Node',
      'Express',
      'MongoDB'
    ],
    allTechsUsed: [
      'HTML5',
      'CSS3',
      'SASS',
      'Javascript|ES6+',
      'Dexie|IndexedDB',
      'AWS',
      'Web Sockets',
      'Service Workers'
    ],
    accomplishments: [
      'Manage translation between multiple users',
      'Install large assets for offline usage',
      'Manually mange synchronization of data',
      'Provide useful translation suggestions based on input'
    ],
    demoLink: 'https://www.ulphilas.com',
    demoIntro: 'Exclusively for Bible Translators'
  },

  {
    projectName: 'FiredUp',
    whatIsIt: 'An app to assist warming up to top working weight in the gym',
    whatDoesItDo: 'Incrementally calculates how much weight and plates are needed to warm up',
    whoIsItFor: 'Powerlifter, weightlifters, and anybody working with a bar and plates',
    screenshots: [
      '/statics/screenshots/fired-up-1.png',
      '/statics/screenshots/fired-up-2.png',
      '/statics/screenshots/fired-up-3.png',
      '/statics/screenshots/fired-up-4.png',
      '/statics/screenshots/fired-up-5.png'
    ],
    screenshotWidth: 468,
    screenshotHeight: 840,
    techStackOverview: [
      'Angular',
      'Ionic'
    ],
    allTechsUsed: [
      'HTML5',
      'CSS3',
      'SASS',
      'Typescript'
    ],
    accomplishments: [
      'Create a way to save time mashing in percentage based calculations while warming up',
      'Manage previous warmups so that they can be reutilized and adjusted instead of being forgotten'
    ],
    demoLink: 'https://fired-up-520e5.firebaseapp.com',
    demoIntro: 'Launching to mobile devices soon',
    repoLink: 'https://github.com/levine404/fired-up',
    repoIntro: 'View full code'
  },

  {
    projectName: 'Monastery Mapper',
    whatIsIt: 'A useful guide to local monasteries around Nepal',
    whatDoesItDo: '...',
    whoIsItFor: '...',
    screenshots: [
      '/statics/screenshots/mon-map-1.png',
      '/statics/screenshots/mon-map-2.png',
      '/statics/screenshots/mon-map-3.png',
      '/statics/screenshots/mon-map-4.png',
      '/statics/screenshots/mon-map-5.png'
    ],
    screenshotWidth: 460,
    screenshotHeight: 780,
    techStackOverview: [
      'Vue'
    ],
    allTechsUsed: [
      'HTML5',
      'CSS3',
      'SASS',
      'Quasar',
      'Javascript|ES6+',
      'Google Maps API'
    ],
    accomplishments: [
      'Created custom icons for mapping monasteries and monuments',
      'Created point-of-interest clusters for low zoom level'
    ],
    demoLink: 'https://mon-map-256107.firebaseapp.com/',
    demoIntro: 'Work in Progress/Collaborating with local university in Kathmandu, Nepal',
    // repoLink: 'https://github.com/levine404/vue-managed-scroller',
    repoIntro: 'Code private'
  },

  {
    projectName: 'vue-managed-scroller',
    whatIsIt: 'A component package for managing virtually displayed items',
    whatDoesItDo: 'Dynamically loads data and reduces DOM rendering, Also allows the CSS property "position: sticky" to be implemented within each item',
    whoIsItFor: 'Developers in need of smooth virtual scroller, especially those wishing to use the CSS property "position: sticky"',
    screenshots: [
      '/statics/screenshots/vue-managed-scroller-1.png',
      '/statics/screenshots/vue-managed-scroller-2.png',
      '/statics/screenshots/vue-managed-scroller-3.png',
      '/statics/screenshots/vue-managed-scroller-4.png'
    ],
    screenshotWidth: 1200,
    screenshotHeight: 615,
    techStackOverview: [
      'Vue',
      'NPM'
    ],
    allTechsUsed: [
      'HTML5',
      'CSS3',
      'SASS',
      'Javascript|ES6+',
      'Vue',
      'IntersectionObserver API',
      'ResizeObserver API'
    ],
    accomplishments: [
      'Created smooth transitions by a virtual scroller',
      'Created a way for a constant header being display using CSS property "position: sticky"'
    ],
    demoLink: 'https://v022jr1545.csb.app/',
    demoIntro: 'Dynamic and static virtual scroller examples',
    repoLink: 'https://github.com/levine404/vue-managed-scroller',
    repoIntro: 'Code and documentation how to implement virutal scroller'
  }
]

export default projects
