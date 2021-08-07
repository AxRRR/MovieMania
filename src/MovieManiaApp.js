import React from 'react';
import { Nav } from './layout/nav/Nav';
import { ContainerMain } from './helpers/ContainerMain'
import { Filter } from './components/Films/Filter';
import { Route, Switch } from 'react-router-dom';
import { ShowDetails } from './components/Details/ShowDetails';

export const MovieManiaApp = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <Switch>
                <Route exact path='/films'>
                    <ContainerMain>
                        <Filter 
                            titlehead={'peliculas'} 
                            category={'movie'}  
                        />
                    </ContainerMain>
                </Route>
                <Route exact path='/:RouteTypeFilm/:RouteIdFilm'>
                    <ShowDetails />
                </Route>
            </Switch>
        </div>
    );
};
