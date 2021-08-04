import React from 'react';
import { Nav } from './layout/nav/Nav';
import { ContainerMain, ContainerMainNoFlex } from './helpers/ContainerMain'
import { CategoryHead } from './components/CategoryHead';
import { Route, Switch } from 'react-router-dom';
import { ShowDetails } from './components/ShowDetails';
import { GaleryDetails } from './components/GaleryDetails';
import { FilmData } from './components/FilmData';
import { CreditsContainer } from './components/CreditsContainer';

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
                        {/* <GaleryDetails /> */}
                    </ContainerMain>
                    <ContainerMainNoFlex>
                        <FilmData />
                    </ContainerMainNoFlex>
                    <ContainerMainNoFlex>
                        <CreditsContainer />
                    </ContainerMainNoFlex>
                </Route>
            </Switch>
        </div>
    );
};
