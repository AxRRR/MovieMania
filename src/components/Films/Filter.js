import React, { useEffect, useState } from 'react';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';
import { usePaginator } from '../../hooks/usePaginator';
import { BestRated } from './BestRated';
import { Films } from './Films';

export const Filter = ({ category, genre = 'popular' }) => {
    const [typeFilm, setTypeFilm] = useState(category)
    const [typeGenre, setTypeGenre] = useState(genre)
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    // Paginator Custom Hook
    const { CurrentPage, updatePageHandle } = usePaginator();

    useEffect(() => {

        const fetchData = async () => {
            let requestUrl =`${APIUrl}${typeFilm}/${typeGenre}?api_key=${MyApiKey}&language=es-ES&page=${CurrentPage}`;

            setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            setResponse(resp);
            setLoading(false);
        };

        fetchData();
    }, [typeFilm, typeGenre, CurrentPage])

    const updateFilter = (type) => {
        setTypeFilm(type);
        setTypeGenre('popular');
    }

    return (
        <div className='ctg_Container'>
            <div>
                <div className='ctg_filter'>
                    <p 
                        className='ctg_itemsWhite'
                        onClick={() => updateFilter('movie')}>Peliculas</p>
                    <p 
                        className='ctg_itemsWhite'
                        onClick={() => updateFilter('tv')}>Series de TV</p>
                </div>
                <div className='ctg_containerCategories'>
                    <p 
                        className='ctg_itemsNormal'
                        onClick={() => setTypeGenre('popular')}>Populares</p>
                    {typeFilm === 'movie' ? 
                    <p 
                        className='ctg_itemsNormal'
                        onClick={() => setTypeGenre('upcoming')}>Próximamente</p> 
                    :
                    <p
                        className='ctg_itemsNormal'
                        onClick={() => setTypeGenre('on_the_air')}>En emisión</p>}
                    <p 
                        className='ctg_itemsNormal'
                        onClick={() => setTypeGenre('top_rated')}>Mejor valoradas</p>
                </div>
            </div>
            <BestRated />
           {response !== null && <Films
                arrfilms={response} 
                isLoading={loading}
                category={typeFilm} 
            />}

            {/*  Paginator System */}
            <div className='pg_main'>
                <button
                    className='pg_main_btn-default'
                    onClick={() => updatePageHandle(2, response.total_pages)}>Ant</button>
                <p className='pg_main_Current-default'>{CurrentPage}</p>
                <button
                    className='pg_main_btn-default'
                    onClick={() => updatePageHandle(1, response.total_pages)}>Sig</button>
            </div>

        </div>
    );
};
