import React from "react"
import styles from "./layout.module.css"

const TemplateWrapper = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default TemplateWrapper
