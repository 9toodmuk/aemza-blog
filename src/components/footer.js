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
    <footer className="mt-auto bg-light text-center py-4">
      ♥ {site.siteMetadata.author}
    </footer>
  )
}

export default Footer
