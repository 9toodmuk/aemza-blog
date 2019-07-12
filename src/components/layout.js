import React, { Component } from "react"

import Header from "./header"
import Footer from "./footer"

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
    const { children } = this.props
    return (
      <div>
        <Header />
        <div className="wrapper min-vh-100 d-flex flex-column">
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
