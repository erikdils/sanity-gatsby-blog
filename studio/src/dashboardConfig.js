export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6043669bac1bd30146b45a88',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r93337fc',
                  apiId: 'cf54bef2-b9a8-4111-b222-05dc90e65f51'
                },
                {
                  buildHookId: '6043669c4c11ab003778da11',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5kwstcm8',
                  apiId: '67b61f58-e41a-407a-9bbc-9f6645cfe5cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erikdils/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5kwstcm8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
