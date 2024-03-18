
import { useEffect, useState } from "react";
import { getApiData } from "./apisUtils";

const useApiData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getApiData(url);
        setData(responseData);
        setLoading(false);
      } catch (fetchError) {
        console.error("Error fetching data:", fetchError);
        // setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApiData;
