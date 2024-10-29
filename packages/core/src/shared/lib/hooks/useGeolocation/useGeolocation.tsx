// https://github.com/sergeyleschev/react-custom-hooks/tree/main/src/hooks/useGeolocation

import { useState, useEffect } from "react";

export default function useGeolocation(options?: PositionOptions) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [data, setData] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(undefined);
      setData(e.coords);
    };

    const errorHandler = (e: any) => {
      setError(e);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );

    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { isLoading, error, data };
}
