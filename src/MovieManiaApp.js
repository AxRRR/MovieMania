import React from 'react';
import { MoviesHeader } from './components/MoviesHeader';
import { Nav } from './layout/nav/Nav';

export const MovieManiaApp = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <MoviesHeader />
        </div>
    );
};
