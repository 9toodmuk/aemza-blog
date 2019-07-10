import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./post.module.css"

const Post = ({ node }) => {
  console.log(node, styles)
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div className={styles.post}>
      {node.frontmatter.featuredImage !== null ? (
        <Link to={node.fields.slug}>
          <div className={styles.imgThumbnail}>
            <span className={styles.overlay}>
              <div className={styles.infoWrapper}>View More</div>
            </span>
            <img
              src={node.frontmatter.featuredImage.childImageSharp.fluid.src}
              srcSet={
                node.frontmatter.featuredImage.childImageSharp.fluid.srcSet
              }
              alt={title}
              height="220"
              width="300"
            />
          </div>
        </Link>
      ) : (
        <Link to={node.fields.slug}>
          <div className={styles.imgThumbnail}>
            <span className={styles.overlay}>
              <div className={styles.infoWrapper}>View More</div>
            </span>
            <img
              src={`https://via.placeholder.com/300x220.png?text=` + title}
              alt={title}
              height="220"
              width="300"
            />
          </div>
        </Link>
      )}
      <div className={styles.postBody}>
        <div className={styles.postTitle}>
          <Link to={node.fields.slug}>
            <h5>{title}</h5>
          </Link>
        </div>
        <p
          className={styles.postDescription}
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        ></p>
      </div>
      <div className={styles.postFooter}>
        <span>
          <FontAwesomeIcon icon="user" /> {node.frontmatter.author}
        </span>
        <span className="ml-auto">
          <FontAwesomeIcon icon="calendar" /> {node.frontmatter.date}
        </span>
        &nbsp;
      </div>
    </div>
  )
}

export default Post
