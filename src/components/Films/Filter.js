import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { BestRated } from './BestRated';
import { Films } from './Films';

export const Filter = ({ category, genre = 'popular' }) => {
    const [typeFilm, setTypeFilm] = useState(category)
    const [typeGenre, setTypeGenre] = useState(genre)

    useEffect(() => {
    }, [typeGenre, typeFilm])

    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: typeFilm,
        genre: typeGenre,
        extraArg: null
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
        </div>
    );
};