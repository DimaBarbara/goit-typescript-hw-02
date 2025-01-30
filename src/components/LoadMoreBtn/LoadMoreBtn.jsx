import React from 'react'
import styles from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({loadMore}) => {
  return (
    <button className={styles.button} type="button" onClick={loadMore}>Load more</button>
  )
}

export default LoadMoreBtn