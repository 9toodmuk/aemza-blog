import React from "react"
import { graphql } from "gatsby"

import "../styles/styles.scss"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Post from "../components/post/post"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <section className="hero bg-hero is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Hello, world!</h1>
              <h2 className="subtitle">Hero subtitle</h2>
            </div>
          </div>
        </section>
        <section class="section">
          <div className="container">
            <div className="columns">
              {posts.map(({ node }) => (
                <div className="column">
                  <Post node={node} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                  sizes
                  srcSet
                }
              }
            }
            date(formatString: "DD MMMM YYYY", locale: "th")
            title
            author
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
