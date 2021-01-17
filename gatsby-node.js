const path = require("path")

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions
    const blogresult = await graphql(`
    {
      allContentfulBlogModel(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
  }
  `)
    if (blogresult.errors) {
        reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
        return
    }
    // 個別記事ページ生成
    blogresult.data.allContentfulBlogModel.edges.forEach(({node, next, previous}) => {
        createPage({
            path: `${node.slug}`,
            component: path.resolve(`./src/templates/blog_articlepage.js`),
            context: {
                id: node.id,
                next,
                previous,
            },
        })
    })

    // const blogPostsPerPage = 6; // リスト系ページの1ページに表示する記事の数
    // const blogPosts = blogresult.data.allContentfulBlogModel.edges.length; //記事の総数
    // const blogListPages = Math.ceil(blogPosts / blogPostsPerPage); //記事一覧リストページの総数
    //
    // Array.from({length: blogListPages}).forEach((_, i) => {
    //     createPage({
    //         path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
    //         // component: i === 0
    //         //   ? path.resolve("./src/templates/blog_listpage_top.js")
    //         //   : path.resolve("./src/templates/blog_listpage.js"),
    //         component: path.resolve("./src/templates/blog_catalogpage.js"),
    //         context: {
    //             skip: blogPostsPerPage * i,
    //             limit: blogPostsPerPage,
    //             currentPage: i + 1, //現在のページ番号
    //             isFirst: i + 1 === 1, //最初のページ
    //             isLast: i + 1 === blogListPages, //最後のページ
    //         },
    //     })
    // })


    // blogresult.data.allContentfulCategory.edges.forEach(({node}) => {
    //     const blogCatPostsPerPage = 6 // リスト系ページの1ページに表示する記事の数
    //     const blogCatPosts = node.blogpost.length //記事の総数
    //     const blogCatListPages = Math.ceil(blogCatPosts / blogCatPostsPerPage) //記事一覧リストページの総数
    //
    //     Array.from({length: blogCatListPages}).forEach((_, i) => {
    //         createPage({
    //             path: i === 0
    //                 ? `/blog/cat/${node.categorySlug}`
    //                 : `/blog/cat/${node.categorySlug}/${i + 1}/`,
    //             component: path.resolve("./src/templates/blog_catalogpage.js"),
    //             context: {
    //                 catid: node.id,
    //                 catname: node.category,
    //                 catslug: node.categorySlug,
    //                 skip: blogCatPostsPerPage * i,
    //                 limit: blogCatPostsPerPage,
    //                 currentPage: i + 1,
    //                 isFirst: i + 1 === 1,
    //                 isLast: i + 1 === blogCatListPages,
    //             }
    //         })
    //     })
    // })
}
