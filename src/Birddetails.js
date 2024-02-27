import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming you have created this custom hook

const BirdDetails = () => {
  const { id } = useParams();
  const { data: bird, error, isPending } = useFetch('http://localhost:8000/Tbl_Bird/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/Tbl_Bird/' + bird.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="container my-4">
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {bird && (
        <div className="row">
            <div className="col-md-4">
                <div className="card shadow">
                    <img src={process.env.PUBLIC_URL + '/' + bird.ImagePath} className="card-img-top" alt="Bird" />
                </div>
            </div>
            <div className="col-md-8">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="card-title">{bird.BirdEnglishName}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">{bird.BirdMyanmarName}</h3>
                        <p className="card-text">{bird.Description}</p>
                        <button className="btn btn-warning" onClick={handleClick}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>

  );
};

export default BirdDetails;
