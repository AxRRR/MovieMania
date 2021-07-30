import React from 'react';
import { MoviesHeader } from './components/MoviesHeader';
import { Nav } from './layout/nav/Nav';
import { ContainerMain } from './helpers/ContainerMain'

export const MovieManiaApp = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <ContainerMain>
                <MoviesHeader 
                    category={'movie'} 
                    headtitle={'peliculas'} 
                />
                <MoviesHeader 
                    category={'tv'} 
                    headtitle={'series'} 
                />
            </ContainerMain>
        </div>
    );
};
