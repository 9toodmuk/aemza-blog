import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import Post from "../components/post"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <section className="bg-hero">
          <div className="container bg-white py-5">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </div>
        </section>
        <Container>
          <div className="row">
            {posts.map(({ node }) => (
              <div className="col-4 py-2">
                <Post node={node} />
              </div>
            ))}
          </div>
        </Container>
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
