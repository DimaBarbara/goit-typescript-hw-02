import React from 'react'
import styles from "./LoadMoreBtn.module.css"
interface LoadMoreBtnProps {
  loadMore: () => void ;
}
const LoadMoreBtn: React.FC <LoadMoreBtnProps> = ({loadMore}) => {
  return (
    <button className={styles.button} type="button" onClick={loadMore}>Load more</button>
  )
}

export default LoadMoreBtn