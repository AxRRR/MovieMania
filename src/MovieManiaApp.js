import React from 'react';
import { Nav } from './layout/nav/Nav';
import { ContainerMain } from './helpers/ContainerMain'
import { CategoryHead } from './components/CategoryHead';
import { Route, Switch } from 'react-router-dom';
import { ShowDetails } from './components/ShowDetails';

export const MovieManiaApp = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <Switch>
                <Route exact path='/films'>
                    <ContainerMain>
                        <CategoryHead 
                            titlehead={'peliculas'} 
                            category={'movie'}  
                        />
                    </ContainerMain>
                </Route>
                <Route exact path='/view/details/:RouteIdFilm'>
                    <ContainerMain>
                        <ShowDetails />
                    </ContainerMain>
                </Route>
            </Switch>
        </div>
    );
};
