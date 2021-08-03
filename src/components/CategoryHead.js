import React, { useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import { MoviesHeader } from './MoviesHeader';

export const CategoryHead = ({ category, genre = 'upcoming' }) => {
    const [typeFilm, setTypeFilm] = useState(category)
    const [typeGenre, setTypeGenre] = useState(genre)

    useEffect(() => {
    }, [typeGenre, typeFilm])

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: typeFilm,
        genre: typeGenre
    });

    console.log(typeFilm)
    console.log(typeGenre)

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
                        onClick={() => setTypeGenre('latest')}>Más recientes</p>
                    <p 
                        className='ctg-items'
                        onClick={() => setTypeGenre('upcoming')}>Próximamente</p>
                </div>
            </div>
            <MoviesHeader 
                arrfilms={resp} 
                isLoading={isLoading}
                error={error} 
                category={typeFilm} 
            />
        </div>
    );
};