import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header-blog"
import Footer from "../components/footer-common"
import PagerBloglist from "../components/pager-bloglist"
import CategorySubBloglist from "../components/category-sub-bloglist"
import ButtonsShare from "../components/buttons-share"

export default ({ data, pageContext }) => (
  <div className="l-wrapper__blog__root--listpage">
    <Header />
    <div className="l-wrapper__maincontents--blog">
      <section
        className={`l-contents__main l-blog-list ${
          pageContext.isFirst && "l-blog-list--toppage"
        }`}
      >
        {data.allContentfulBlogModel.edges.map(({ node }) => (
          <article className="p-blog-article--listitem">
            <Link to={`/blog/post/${node.slug}`}>
              <header className="p-blog-article--listitem__header">
                <Img
                  fluid={node.eyecatch.fluid}
                  alt="（アイキャッチ画像説明）"
                  className="c-eyecatch"
                />
                <h2 className="c-article__title">{node.title}</h2>
                <div className="c-timestamp">
                  <div className="c-creation-time">
                    <span className="u-datetime">{node.publishDate}</span>
                    <span className="u-unit"> 作成</span>
                  </div>
                  <div className="c-last-update-time">
                    <span className="u-datetime">{node.updatedAt}</span>
                    <span className="u-unit"> 更新</span>
                  </div>
                </div>
                <div className="c-author">
                  <div className="u-icon-avater">
                    <Img
                      fluid={node.author.authoricon.fluid}
                      alt="（アイコン画像説明）"
                    />
                  </div>
                  <div className="u-name">{node.author.authorname}</div>
                </div>
              </header>
            </Link>
          </article>
        ))}
        <PagerBloglist arg={`/blog/`} pageContext={pageContext} />
      </section>
      <section className="l-contents__sub">
        <CategorySubBloglist data={data} />
      </section>
    </div>
    <ButtonsShare
      arg={`https://`}
      shareText=""
    />
    <Footer />
  </div>
)

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogModel(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          publishDate(formatString: "YY.MM.DD HH:mm")
          slug
        }
      }
    }
  }
`
