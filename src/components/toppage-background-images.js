import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

export default () => (
  <>
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      `)}
      images={[
        "slideshowimage_010.jpg",
        "slideshowimage_020.jpg",
        "slideshowimage_030.jpg",
        "slideshowimage_050.jpg",
      ]}
    />
  </>
)
