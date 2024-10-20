import { useState, useCallback } from 'react';

function UseGeolocation() {
  const [location, setLocation] = useState(null); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported ');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading, getLocation };
}

export default UseGeolocation
