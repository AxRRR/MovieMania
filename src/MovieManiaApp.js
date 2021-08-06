import React, { useState } from 'react';
import { Nav } from './layout/nav/Nav';
import { ContainerMain } from './helpers/ContainerMain'
import { Filter } from './components/Films/Filter';
import { Route, Switch } from 'react-router-dom';
import { ShowDetails } from './components/Details/ShowDetails';
import { ShowMedia } from './components/Details/ui/ShowMedia';

export const MovieManiaApp = () => {
    const [showModal, setShowModal] = useState(false);
    const showModalHandler = () => {
        setShowModal(true);
    };
    
    const hideModalHandler = () => {
        setShowModal(false);
    };

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
                    <ShowDetails onShowModal={showModalHandler} />
                    {showModal && <ShowMedia onCloseModal={hideModalHandler} /> }
                </Route>
            </Switch>
        </div>
    );
};
