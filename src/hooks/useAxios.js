import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

//  Custom Hook to send requests API
//    with different params, like: Category, Platform, Tags and no params.

export const useAxios = ( dataParams ) => {
    const isMounted = useRef(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, SetIsLoading] = useState(false);
    
    const urlCustom = FormatUrlCustom(dataParams);

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        SetIsLoading(true);
        const options = {
            method: 'get',
            url: urlCustom,
            headers: {},
        };
        
        axios.request(options)
        .then( response => {
            if ( isMounted.current ) {
                setResponse(
                    response.data
                )
            }
            SetIsLoading(false);
        })
        .catch( error => {
            setError({
                error: error
            })
            SetIsLoading(false);
        });
    }, [urlCustom]) 
    return { response, error, isLoading };
};


function FormatUrlCustom(data){

    const [urlCustom, SetUrlCustom] = useState('');

    const apiUrl = "https://api.themoviedb.org/3/";
    const apiKey = "65321490780e7762cb0121f9c9afeb23";

    useEffect(() => {
        getReformat(data.data);
    }, [data.data])

    function getReformat({
        type = null,   
        typeRequest = null, 
        genre = null, 
        extraArg = null, 
        lang = null, 
        page = 1
    }){

        if (extraArg !== null) {
            if(lang !== null){
                SetUrlCustom(`${apiUrl}${type}/${genre}/${extraArg}?api_key=${apiKey}`);
            }else {
                SetUrlCustom(`${apiUrl}${type}/${genre}/${extraArg}?api_key=${apiKey}&language=es-ES`);
            }
        } else {
            if(typeRequest !== null){
                SetUrlCustom(`${apiUrl}${type}/${genre}?api_key=${apiKey}&language=es-ES&page=${page}`);
            }else {
                SetUrlCustom(`${apiUrl}${type}/${genre}?api_key=${apiKey}&language=es-ES`);
            }
        }
    }    
    return urlCustom;
}