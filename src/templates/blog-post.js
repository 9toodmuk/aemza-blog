import React from "react"
import { graphql } from "gatsby"

import BlogLayout from "../components/blog-layout/blog-layout"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext
    // const tags = post.frontmatter.tags.split(",")

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogLayout
          title={post.frontmatter.title}
          author={post.frontmatter.author}
          date={post.frontmatter.date}
        >
          <section className="section">
            <div className="container is-fluid">
              <p
                style={{
                  display: `block`,
                  marginBottom: `1rem`,
                }}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </section>
        </BlogLayout>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY", locale: "th")
        description
        author
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
