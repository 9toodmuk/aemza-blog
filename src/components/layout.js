import React, { Component } from "react"
import { Link } from "gatsby"

import Header from "./header"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faSearch,
  faArrowLeft,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

library.add(fab, faSearch, faArrowLeft, faCalendar, faUser)

class Layout extends Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <Header />
        <div className="wrapper">
          {location.pathname === rootPath ? (
            <section className="bg-hero">
              <div className="container bg-white py-5">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr className="my-4" />
                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
                <Link className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </Link>
              </div>
            </section>
          ) : (
            ""
          )}
          <div className="container">{children}</div>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
