import React, { useEffect, useState, useMemo } from 'react';

export default () => {
   const [spots, setSpots] = useState([])
  const [requests, setRequests] = useState([])

  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
                <header style={{backgroundImage: `url('${spot.thumbnail_url}')`}} />
                  <strong>{spot.title}</strong>
                <span>{
                  spot.price
                    ? `GH¢${spot.price}/day`
                    : `FREE`
            }   </span>
          </li>
        ))}
      </ul>
      </>
  );
};


