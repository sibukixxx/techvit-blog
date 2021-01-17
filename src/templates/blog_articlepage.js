import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import Header from "../components/header-blog"
import Footer from "../components/footer-common"
import PagerBlogarticle from "../components/pager-blogarticle"
import ButtonsShare from "../components/buttons-share"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <img
        src={node.data.target.fields.file["ja-JP"].url}
        alt={
          node.data.target.fields.description
            ? node.data.target.fields.description["ja-JP"]
            : node.data.target.fields.title["ja-JP"]
        }
      />
    ),
  },
}

export default ({ data, pageContext }) => (
  <div className="l-wrapper__blog__root--articlepage">
    {/*<Header />*/}
    <div className="l-wrapper__maincontents--blog">
      <section className="l-contents__main">
        <article className="p-blog-article">
          <header className="p-blog-article__header">
            {/*<Img*/}
            {/*  fluid={data.contentfulBlogModel.eyecatch.fluid}*/}
            {/*  alt="（アイキャッチ画像説明）"*/}
            {/*  className="c-eyecatch"*/}
            {/*/>*/}
            <h1 className="c-article__title">
              {data.contentfulBlogModel.title}
            </h1>
            <div className="c-timestamp">
              <div className="c-creation-time">
                <span className="u-datetime">
                  {data.contentfulBlogModel.publishDate}
                </span>
                <span className="u-unit"> 作成</span>
              </div>
              <div className="c-last-update-time">
                <span className="u-datetime">
                  {data.contentfulBlogModel.updatedAt}
                </span>
                <span className="u-unit"> 最終更新</span>
              </div>
            </div>
            <div className="c-author">
              {/*<div className="u-icon-avater">*/}
              {/*  <Img*/}
              {/*    fluid={data.contentfulBlogModel.author.authoricon.fluid}*/}
              {/*    alt="（アイコン画像説明）"*/}
              {/*  />*/}
              {/*</div>*/}
              {/*<div className="u-name">*/}
              {/*  {data.contentfulBlogModel.author.authorname}*/}
              {/*</div>*/}
            </div>
            <ul className="c-categories">
              {/*{data.contentfulBlogModel.category.map(cat => (*/}
              {/*  <li className={cat.categorySlug} key={cat.id}>*/}
              {/*    <Link to={`/blog/cat/${cat.categorySlug}`}>*/}
              {/*      {cat.category}*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*))}*/}
            </ul>
          </header>
          <div className="p-content">
            {renderRichText(data.contentfulBlogModel.content, {})}
          </div>
          <div className="p-blog-article__footer">
            <PagerBlogarticle pageContext={pageContext} />
          </div>
        </article>
      </section>
      <section className="l-contents__sub" />
    </div>
    <ButtonsShare
      arg={`https://corp.mis.dev/blog/post/${data.contentfulBlogModel.slug}/`}
      shareText={`${data.contentfulBlogModel.title} 美園ITサービスブログ`}
    />
    <Footer />
  </div>
)

export const query = graphql`
  query($id: String!) {
    contentfulBlogModel(id: { eq: $id }) {
      publishDate(formatString: "YYYY/MM/DD HH:mm")
      title
      slug
      updatedAt(formatString: "YYYY/MM/DD HH:mm")
      content {
        raw
      }
    }
  }
`
