import React from 'react';
import { Nav } from './layout/nav/Nav';
import { ContainerMain } from './helpers/ContainerMain'
import { CategoryHead } from './components/CategoryHead';

export const MovieManiaApp = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <ContainerMain>
                <CategoryHead 
                    titlehead={'peliculas'} 
                    category={'movie'}  
                />
                {/* <CategoryHead 
                    titlehead={'serie'} 
                    category={'tv'}  
                /> */}
            </ContainerMain>
        </div>
    );
};
