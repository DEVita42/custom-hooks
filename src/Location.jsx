import React from 'react';
import UseGeolocation from './UseGeolocation'; 

function Location() {
  const { location, error, loading, getLocation } = UseGeolocation();

  return (
    <div>
      <button onClick={getLocation}>Get Current Location</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}

export default Location;
