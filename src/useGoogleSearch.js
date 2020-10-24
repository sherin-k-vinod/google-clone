import { useEffect, useState } from "react";
import API_KEY from "./apikey";
const CONTEXT_KEY = "07458b6107a4971be";
const useGoogleSearch = (term) => {
  console.log(term);
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setdata(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
