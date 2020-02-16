import React, { Component } from "react"

class BlogLayout extends Component {
  render() {
    const { title, author, date, children } = this.props
    return (
      <div>
        <section className="hero bg-hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">
                <span>{author}</span> ♦ <span>{date}</span>
              </h2>
            </div>
          </div>
        </section>
        {children}
      </div>
    )
  }
}

export default BlogLayout
