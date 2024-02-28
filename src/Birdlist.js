import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHummingbird } from "react-icons/gi";

function BirdList() {
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    fetch('https://bird-json-server.vercel.app/Tbl_Bird')
      .then(response => response.json())
      .then(data => setBirdList(data))
      .catch(error => console.log('Error fetching bird data:', error));
  }, []);

  return (
    <div className='container'>
    <div className='detailbird d-flex flex-column'>
      <div className="moving-text-container">
        <h2 className='moving-text pt-5 text-light'><GiHummingbird />ချစ်စရာငှက်ကလေးများအကြောင်းကို လေ့လာကြည့်ကြပါစို့<GiHummingbird className="reverse-icon"/></h2>
      </div>
    <div className="bird-list row">
    {birdList.map(bird => (
      <div className="col-md-3" key={bird.Id}>
        <div className="card card-body bird-preview shadow " data-aos="zoom-in">
           
          <Link to={`/bird/${bird.id}`}>
            
            <img className="img-top " src={process.env.PUBLIC_URL + '/' + bird.ImagePath} alt="Bird" style={{ width:200 , height:200 }}/>
            {/* <div className="card-body border-0 shadow-p3"> */}
            <h6 className="card-title textlight mt-3">{bird.BirdEnglishName}</h6>
              <h5 className="card-title text-light mt-3">{bird.BirdMyanmarName}  </h5>
              {/* Uncomment the line below if you want to display bird descriptions */}
              {/* <p className="card-text">{bird.Description}</p> */}
            {/* </div> */}
          </Link>
          
        </div>
      </div>
    ))}
  </div>
  </div>
  </div>
  );
}

export default BirdList;
