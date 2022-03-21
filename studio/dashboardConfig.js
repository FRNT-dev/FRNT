export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '623890581cd5d9609732ceb7',
                  title: 'Sanity Studio',
                  name: 'frnt-studio',
                  apiId: '6b495c8c-cdf4-48f8-8b43-c392444fca44'
                },
                {
                  buildHookId: '62389058caf1e16a5baad534',
                  title: 'Blog Website',
                  name: 'frnt',
                  apiId: '224d1b45-097e-4386-8deb-b8c950342ee4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djeglin/FRNT',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://frnt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
