import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = post.frontmatter.tags.split(",")

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div
          className={
            "bg-hero post-cover" +
            (post.frontmatter.featuredImage ? " blur" : "")
          }
          style={
            post.frontmatter.featuredImage && {
              backgroundImage: `url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})`,
            }
          }
        ></div>
        <Container
          className="bg-white min-vh-100"
          style={{
            marginTop: "-380px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <div className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <h1 style={{ marginBottom: 0 }}>{post.frontmatter.title}</h1>
                <div className="text-muted">
                  <span>
                    <FontAwesomeIcon icon="user" /> {post.frontmatter.author}
                  </span>
                  <span className="ml-2">
                    <FontAwesomeIcon icon="calendar" /> {post.frontmatter.date}
                  </span>
                </div>
              </div>
              <div>
                <button className="btn btn-facebook btn-sm">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  <span className="ml-1">แชร์</span>
                </button>
                <button className="btn btn-twitter btn-sm ml-2">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                  <span className="ml-1">ทวิต</span>
                </button>
              </div>
            </div>
          </div>
          <div class="post-body p-3">
            <p
              style={{
                display: `block`,
                marginBottom: `1rem`,
              }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></p>
          </div>
          <hr className="dotted-line" />
          <div className="p-3 d-flex">
            {tags.map(tag => (
              <div
                style={{
                  backgroundColor: `rgba(222,43,43,.1)`,
                  color: `#de2b2b`,
                  font: `500 12px Ubuntu, sans-serif`,
                  margin: `4px 4px 4px 0`,
                  padding: `4px 8px`,
                  cursor: `pointer`,
                  textTransform: `uppercase`,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <hr className="dotted-line" />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Container>
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
        date(formatString: "DD MMMM YYYY", locale: "th")
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
