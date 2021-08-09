import { useState, useEffect, useRef } from 'react';

export const useFetch = ( dataParams ) => {
    
    // Receive params and get url custom
    const urlCustom = FormatUrlCustom(dataParams);

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });
    
    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect( () => {
        setState({ 
            data: null, 
            loading: true, 
            error: null 
        });
        
        fetch( urlCustom )
        .then( resp => resp.json() )
        .then( data => {
            
            if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
                
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Ocurrio un error inesperado... no se pudo recuperar la informacion.'
                })
            })
            
        },[urlCustom])
    return state;
}




export function FormatUrlCustom( data ){
    const [urlCustom, SetUrlCustom] = useState('');

    const apiUrl = "https://api.themoviedb.org/3/";
    const apiKey = "65321490780e7762cb0121f9c9afeb23";

    useEffect(() => {
        getReformat(data.data);
    }, [data.data])

    function getReformat({
        type,   
        typeRequest, 
        genre, 
        extraArg = null, 
        lang = null, 
        page
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