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
            <>
                <MoviesHeader category={'movie'} />
                <MoviesHeader category={'tv'} />
            </>
        </div>
    );
};
