import React from "react";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import HomeJsonLd from "../components/json/HomeJsonLd";

class BlogIndex extends React.Component {
    render() {
        const {data} = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allContentfulBlogModel.edges;
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title=""/>
                <Helmet>
                    <link rel="canonical" href="https://catnose99.com"/>
                </Helmet>
                <HomeJsonLd/>
                {posts.map(({node}) => {
                    return <PostCard key={node.slug} node={node}/>;
                })}
            </Layout>
        );
    }
}

export default BlogIndex

export const query = graphql`
  query QueryTop {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogModel: allContentfulBlogModel(
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          thumbnail {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          createdAt(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
