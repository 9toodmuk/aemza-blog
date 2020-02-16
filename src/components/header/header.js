import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            {site.siteMetadata.title}
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/">
              Contact
            </Link>
            <Link className="navbar-item" to="/">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
