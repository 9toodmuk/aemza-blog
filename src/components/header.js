import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
    <nav className="navbar fixed-top navbar-expand-lg bg-white">
      <div className="container">
        <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item">
            <Link className="nav-link" href="#">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                style={{ color: "#000000" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                style={{ color: "#000000" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{ color: "#000000" }}
              />
            </Link>
          </li>
        </ul>
        <Link className="navbar-brand" href="#">
          {site.siteMetadata.title}
          <small>{site.siteMetadata.subtitle}</small>
        </Link>
        <button className="btn">
          <span class="d-none d-md-inline">ค้นหา</span>
          <FontAwesomeIcon icon="search" className="ml-2" />
        </button>
      </div>
    </nav>
  )
}

export default Header
