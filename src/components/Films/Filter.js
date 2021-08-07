import React, { useEffect, useState } from 'react';
// import queryString from 'query-string';
import { useAxios } from '../../hooks/useAxios';
import { usePaginator } from '../../hooks/usePaginator';
import { BestRated } from './BestRated';
import { Films } from './Films';
// import { useLocation } from 'react-router-dom';

export const Filter = ({ category, genre = 'popular', history }) => {
    const [typeFilm, setTypeFilm] = useState(category)
    const [typeGenre, setTypeGenre] = useState(genre)

    // const location = useLocation();
    // const { pathname } = useLocation();

    // const handleSearch = ( e ) => {
    //     console.log(pathname)
    //     pathname.push((`?q=alex`));
    // }

    // const { q = '' } = queryString.parse( location.search );

    useEffect(() => {
    }, [typeGenre, typeFilm])

    // Paginator Custom Hook
    const { CurrentPage, updatePageHandle } = usePaginator();
    
    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: typeFilm,
        genre: typeGenre,
        extraArg: null,
        page: CurrentPage,
        typeRequest: 'list'
    });

    return (
        <div className='ctg-container-main'>
            <div>
                <div className='ctg-container-filter'>
                    <p 
                        className='ctg-items-white'
                        onClick={() => setTypeFilm('movie')}>Peliculas</p>
                    <p 
                        className='ctg-items-white'
                        onClick={() => setTypeFilm('tv')}>Series de TV</p>
                </div>
                <div className='ctg-container-categories'>
                    <p 
                        className='ctg-items'
                        onClick={() => setTypeGenre('popular')}>Populares</p>
                    <p 
                        className='ctg-items'
                        onClick={() => setTypeGenre('upcoming')}>Próximamente</p>
                    <p 
                        className='ctg-items'
                        onClick={() => setTypeGenre('top_rated')}>Mejor valoradas</p>
                </div>
            </div>
            <BestRated />
            <Films
                arrfilms={resp} 
                isLoading={isLoading}
                error={error} 
                category={typeFilm} 
            />

            {/*  Paginator System */}

            { !!resp && 
            <div className='pg__default'>
                <button
                    className='pg__btn-default'
                    onClick={() => updatePageHandle(2, resp.total_pages)}>Ant</button>
                <p className='pg__Current-default'>{CurrentPage}</p>
                <button
                    className='pg__btn-default'
                    onClick={() => updatePageHandle(1, resp.total_pages)}>Sig</button>
            </div> }

        </div>
    );
};
