import React, { Component } from "react"
import { graphql } from "gatsby"

import BlogLayout from "../components/blog-layout/blog-layout"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class SongPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext
    // const tags = post.frontmatter.tags.split(",")
    const {
      songtitle,
      japanese,
      artist,
      album,
      single,
      lyrics,
      composer,
      arranger,
      video,
    } = post.frontmatter

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
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="post-title">
                    <h2>{songtitle}</h2>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div
                  class="column is-7"
                  style={{ margin: "0 auto", padding: "0" }}
                >
                  <div className="song-info">
                    <div className="song-detail">
                      <div className="song-detail-item">
                        <div>Japanese</div>
                        <div>{japanese}</div>
                      </div>
                      <div className="song-detail-item">
                        <div>Artist</div>
                        <div>{artist}</div>
                      </div>
                      {album && (
                        <div className="song-detail-item">
                          <div>Album</div>
                          <div>{album}</div>
                        </div>
                      )}
                      {single && (
                        <div className="song-detail-item">
                          <div>Single</div>
                          <div>{single}</div>
                        </div>
                      )}
                      <div className="song-detail-item">
                        <div>Lyrics</div>
                        <div>{lyrics}</div>
                      </div>
                      <div className="song-detail-item">
                        <div>Composer</div>
                        <div>{composer}</div>
                      </div>
                      <div className="song-detail-item">
                        <div>Arranger</div>
                        <div>{arranger}</div>
                      </div>
                    </div>
                    <img
                      src={
                        post.frontmatter.featuredImage.childImageSharp.fluid.src
                      }
                      alt={post.frontmatter.title}
                    />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="post-title">
                    <h2>Video</h2>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div
                  class="column is-7"
                  style={{ margin: "0 auto", padding: "0" }}
                >
                  <figure class="image is-16by9">
                    <iframe
                      class="has-ratio"
                      width="640"
                      height="360"
                      src={video}
                      title={post.frontmatter.title}
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </div>
              </div>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="post-title">
                    <h2>Lyrics</h2>
                  </div>
                </div>
              </div>
              <div
                className="has-text-centered"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </section>
        </BlogLayout>
      </Layout>
    )
  }
}

export default SongPostTemplate

export const pageQuery = graphql`
  query SongPostBySlug($slug: String!) {
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
        template
        songtitle
        japanese
        artist
        album
        single
        lyrics
        composer
        arranger
        video
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
