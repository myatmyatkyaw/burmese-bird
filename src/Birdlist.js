import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BirdList() {
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Tbl_Bird')
      .then(response => response.json())
      .then(data => setBirdList(data))
      .catch(error => console.log('Error fetching bird data:', error));
  }, []);

  return (
    <div className='detailbird bg-secondary'>
        <h2>ချစ်စရာငှက်ကလေးများ</h2>
    <div className="bird-list row">
    {birdList.map(bird => (
      <div className="col-md-4" key={bird.Id}>
        <div className="card card-body bird-preview bg-secondary border-0 shadow-p3 rounded">
           
          <Link to={`/bird/${bird.id}`}>
            <img className="card-img-top" src={process.env.PUBLIC_URL + '/' + bird.ImagePath} alt="Bird" style={{ width:300 , height:300 }}/>
            {/* <div className="card-body border-0 shadow-p3"> */}
              <h5 className="card-title text-warning">{bird.BirdMyanmarName} - {bird.BirdEnglishName}</h5>
              {/* Uncomment the line below if you want to display bird descriptions */}
              {/* <p className="card-text">{bird.Description}</p> */}
            {/* </div> */}
          </Link>
          
        </div>
      </div>
    ))}
  </div>
  </div>
  );
}

export default BirdList;
