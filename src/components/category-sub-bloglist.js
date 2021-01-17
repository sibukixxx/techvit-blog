import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <section className="l-bloglist">
    <article className="p-blog-article--listitem">
      {data.allContentfulCategory.edges.map(({ node }) => (
        <Link to={`/blog/cat/${node.categorySlug}/`}>
          <header className="p-blog-article--listitem__header">
            <Img
              fluid={node.categoryimage.fluid}
              alt="（アイキャッチ画像説明）"
              className="c-eyecatch"
            />
            <h2 className="c-article__title">{node.category}</h2>
          </header>
        </Link>
      ))}
    </article>
  </section>
)
