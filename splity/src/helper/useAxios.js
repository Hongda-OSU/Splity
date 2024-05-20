import { useState } from "react";
import axios from "axios";

const useAxios = (url, method = "GET", options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (body = null) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios({
        url,
        method,
        ...options,
        data: body,
      });
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchData };
};

export default useAxios;
