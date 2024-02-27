import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Birdwithflower from './8_HaircrestedDrongo.jpg'

const Home = () => {
  return (
    <div>
       <h1 className=''>Welcome to Bird </h1>
       <div className='row'>
        <div className='card col-md-6'>
      <div className="bird-image">
      <Link to="/birds">
        <img src={Birdwithflower} alt="Bird" style={{ width: 300, height:300 }} />
        </Link>
      </div>
      {/* <div className="navigation-links">
        <Link to="/birds">View Bird List</Link>
      </div> */}
      </div>
      <div className='col-md-6'>
<div className='card col-md-6'></div>
<div className='col-md-6 card'></div>
      </div>
    </div>
    </div>
  )
}

export default Home
