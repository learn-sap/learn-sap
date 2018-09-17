module.exports = {
  title: 'Learn SAP',
  description: 'Learn SAP',
  ga: 'UA-119284124-1',
  themeConfig: {
    nav: [
      { text: 'ABAP', link: '/abap/' }
      // { text: 'Agentry', link: '/agentry/' },
      // {
      //   text: 'Modules',
      //   items: [
      //     { text: 'FI', link: '/fi/' },
      //     { text: 'HCM', link: '/hcm/' }
      //   ]
      // }
    ],
    sidebar: {
      '/abap/': [{
        title: 'Core ABAP',
        collapsable: true,
        children: [
          '/abap/function-modules.md',
          '/abap/standard-text.md'
        ]
      },
      {
        title: 'ABAP HR',
        children: [
          '/abap/abap-hr/payroll-results.md'
        ]
      },
      {
        title: 'Webdynpro ABAP',
        children: [
          '/abap/webdynpro-abap/standard-components.md',
          '/abap/webdynpro-abap/floor-plans.md'
        ]
      }
      ],
      
      '/hcm/': [ '/hcm/infotypes' ]
    }
  }
}