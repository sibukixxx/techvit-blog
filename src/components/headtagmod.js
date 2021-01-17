import React from "react"
import { Helmet } from "react-helmet"

export default function App() {
  const isProduction = process.env.GATSBY_SITE_ENV_TYPE !== "PROD"
  return (
    <Helmet>
      <html lang="Ja" />
      <title>美園ITサービス合同会社</title>
      {isProduction && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}
