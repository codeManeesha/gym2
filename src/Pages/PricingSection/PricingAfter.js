import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PricingAfter.module.css'

export default function PricingAfter() {

    const nav = useNavigate();

    function handleGo(){
        nav("/")
    }
  return (
    <div className={styles.parentDiv}>
        <h3>You purchased a plan. Now you can go to HomePage</h3>
        <button>onClick={handleGo} data={"Go to Home"}</button>

    </div>
  )
}