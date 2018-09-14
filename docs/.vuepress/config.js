module.exports = {
  title: 'Learn SAP',
  description: 'Learn SAP',
  ga: 'UA-119284124-1',
  themeConfig: {
    nav: [
      { text: 'ABAP', link: '/abap/' },
      { text: 'Agentry', link: '/agentry/' },
      {
        text: 'Modules',
        items: [
          { text: 'FI', link: '/fi/' },
          { text: 'HCM', link: '/hcm/' }
        ]
      }
    ],
    sidebar: {
      '/abap/': [{
        title: 'Data Dictionary',
        collapsable: true,
        children: [
          '/abap/search-help.md',
          '/abap/function-modules.md'
        ]
      },
      {
        title: 'ABAP HR',
        children: [
          '/abap/abap-hr/payroll-results.md'
        ]
      }
      ],
      
      '/hcm/': [ '/hcm/infotypes' ]
    }
  }
}