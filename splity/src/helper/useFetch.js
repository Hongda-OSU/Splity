import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export default useFetch;
