import React from 'react'
import styles from './Home.module.css'
import Carousel from '../../components/Carousel/Carousel'
export default function Home() {
    return (
      <>
        <Carousel />
        <div className={styles.centerContainer}>
          <h1>Estamos en Home</h1>
        </div>
      </>
    )
}