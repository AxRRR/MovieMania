import axios from "axios";
import { useEffect, useState } from "react";

//  Custom Hook to send requests API
//    with different params, like: Category, Platform, Tags and no params.

export const useAxios = ({ method, type, genre }) => {
  const [resp, setResp] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);
  const apiUrl = "https://api.themoviedb.org/3/";
  const apiKey = '65321490780e7762cb0121f9c9afeb23';

  useEffect(() => {
    SetIsLoading(true);
    const options = {
    method: method,
      url: `${apiUrl}${type}/${genre}?api_key=${apiKey}`,
      headers: { },
    };

    axios
      .request(options)
      .then(function (response) {
        setResp(response.data);
        SetIsLoading(false);
      })
      .catch(function (error) {
        setError(error);
        console.log(error)
        SetIsLoading(false);
      });
  }, [ method, type ]);

  return { resp, error, isLoading };
};