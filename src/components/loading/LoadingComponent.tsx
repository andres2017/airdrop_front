import React from 'react'
import { Mosaic } from 'react-loading-indicators';
import './LoadingComponente.css'

const LoadingComponent = () => {
  return (
    <div className="loading-overlay">
    <div className="loading-container">
      <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
    </div>
  </div>
  )
}

export default LoadingComponent