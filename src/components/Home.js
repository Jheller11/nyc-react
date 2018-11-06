import React from 'react'
import '../styles/Home.css'
import brooklynbridge from '../images/brooklynbridge.jpg'

const Home = () => {
  return (
    <div>
      <div className="section">
        <div>Here is the description of the app</div>
        <div>
          <img className="bridge" src={brooklynbridge} alt="brooklyn bridge" />
        </div>
      </div>
      <div className="divider" />
      <div className="section">section 2</div>
      <div className="divider" />
      <div className="section">section 3</div>
    </div>
  )
}

export default Home
