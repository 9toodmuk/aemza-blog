import React, { Component } from "react"

class Container extends Component {
  render() {
    const { children, style } = this.props
    let { className } = this.props
    className = `container flex-fill ${className}`
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }
}

export default Container
