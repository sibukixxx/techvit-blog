import React from "react"
import { Link } from "gatsby"

export default ({ arg, pageContext }) => (
  <ul className="p-pagenation">
    {!pageContext.isFirst && (
      <Link
        to={
          pageContext.currentPage === 2
            ? arg
            : `${arg}${pageContext.currentPage - 1}/`
        }
        rel="prev"
        className="c-link__prev"
      >
        <span>＜ 前のページ</span>
      </Link>
    )}
    {!pageContext.isLast && (
      <Link
        to={`${arg}${pageContext.currentPage + 1}/`}
        rel="next"
        className="c-link__next"
      >
        <span>次のページ ＞</span>
      </Link>
    )}
  </ul>
)
