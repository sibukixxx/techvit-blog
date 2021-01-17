import React from "react"
import { Link } from "gatsby"

export default ({ pageContext }) => (
  <nav className="p-link__siblings">
    {pageContext.next && (
      <Link
        to={`/blog/post/${pageContext.next.slug}/`}
        className="c-link__prev-article"
        rel="prev"
      >
        {pageContext.next.title}
      </Link>
    )}
    {pageContext.previous && (
      <Link
        to={`/blog/post/${pageContext.previous.slug}/`}
        className="c-link__next-article"
        rel="next"
      >
        {pageContext.previous.title}
      </Link>
    )}
  </nav>
)
