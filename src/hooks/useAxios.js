import axios from 'axios';
import { useEffect, useState } from 'react';

//  Custom Hook to send requests API
//    with different params, like: Category, Platform, Tags and no params.

export const useAxios = ({ method, type, genre, extraArg = null }) => {
  const [resp, setResp] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, SetIsLoading] = useState(false);
  const [urlCustom, SetUrlCustom] = useState('');
  const apiUrl = "https://api.themoviedb.org/3/";
  const apiKey = "65321490780e7762cb0121f9c9afeb23";

  useEffect(() => {
    if (extraArg !== null) {
      SetUrlCustom(`${apiUrl}${type}/${genre}/${extraArg}?api_key=${apiKey}&language=es-ES`);
    } else {
      SetUrlCustom(`${apiUrl}${type}/${genre}?api_key=${apiKey}&language=es-ES`);
    }

    const options = {
      method: method,
      url: urlCustom,
      headers: {},
    };

    SetIsLoading(true);

    axios
      .request(options)
      .then(function (response) {
        setResp(response.data);
        SetIsLoading(false);
      })
      .catch(function (error) {
        setError(error);
        console.log(error);
        SetIsLoading(false);
      });
  }, [method, genre, type, extraArg, urlCustom]);

  return { resp, error, isLoading };
};
