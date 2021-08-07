import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { usePaginator } from '../../hooks/usePaginator';
import { BestRated } from './BestRated';
import { Films } from './Films';

export const Filter = ({ category, genre = 'popular' }) => {
    const [typeFilm, setTypeFilm] = useState(category)
    const [typeGenre, setTypeGenre] = useState(genre)
    const [NumShowFilms, setNumShowFilms] = useState(20);
    const [PageShow, setPageShow] = useState(1);
    const [TotalPages, setTotalPages] = useState(1);

    useEffect(() => {
    }, [typeGenre, typeFilm, PageShow])

    const { CurrentPage, isFinalPage, updatePageHandle } = usePaginator({
        numPage: PageShow,
        totalPages: TotalPages
    })
    
    const { resp, error, isLoading } = useAxios({
        methodname: 'get',
        type: typeFilm,
        genre: typeGenre,
        extraArg: null,
        page: CurrentPage,
        typeRequest: 'list'
    });


    // const updatePageHandle = ( typePage, getTotalPages ) => {
    //     // console.log(isFinalPage)
    //     // if( isFinalPage === true ) return;
    //     // switch (typePage) {
    //     //     case 1:
    //     //         setPageShow(PageShow+1);
    //     //         setTotalPages(getTotalPages);
    //     //         break;

    //     //     case 2:
    //     //         setPageShow(PageShow-1);
    //     //         setTotalPages(getTotalPages);
    //     //         break;
        
    //     //     default:
    //     //         break;
    //     // }
        
    // }

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
            { resp !== null && <div>
                {/* {setTotalPages(resp.total_pages)} */}
                <button onClick={() => updatePageHandle(2, resp.total_pages)}>Ant</button>
                {/* <input value={CurrentPage} /> */}
                <p>{CurrentPage}</p>
                <button onClick={() => updatePageHandle(1, resp.total_pages)}>Sig</button>
            </div> }
        </div>
    );
};
