import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer class="footer">
      <div class="content has-text-centered">♥ {site.siteMetadata.author}</div>
    </footer>
  )
}

export default Footer
