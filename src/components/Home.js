import React from 'react'
import '../styles/Home.css'
import brooklynbridge from '../images/brooklynbridge.jpg'

const Home = () => {
  return (
    <div>
      <div className="section-2">
        <div>
          <h2>Hi!</h2>
          Here is the description of the app
        </div>
        <div>
          <img className="bridge" src={brooklynbridge} alt="brooklyn bridge" />
        </div>
      </div>
      <div className="divider" />
      <div className="section-2">
        <div>here is the video</div>
        <div>Getting Started</div>
      </div>
      <div className="divider" />
      <div className="section">Share a list with friends</div>
      <div className="divider" />
      <div className="section">Features (yelp, maps)</div>
    </div>
  )
}

export default Home
