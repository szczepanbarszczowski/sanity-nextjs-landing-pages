export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcd42b853d43e0187d4fda7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1c3st8km',
                  apiId: 'daed830a-cf8a-4466-a86b-596df634c627'
                },
                {
                  buildHookId: '5dcd42b8e30fef0184140d98',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gepxzq9m',
                  apiId: '7d8a9d7c-62c5-4d77-a16c-823bf360e6b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/szczepanbarszczowski/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gepxzq9m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
