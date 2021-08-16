import React, { useState } from 'react';
import { Nav } from './layout/nav/Nav';
import { ContainerMain } from './helpers/ContainerMain'
import { Filter } from './components/Films/Filter';
import { Route, Switch } from 'react-router-dom';
import { ShowDetails } from './components/Details/ShowDetails';
import { Credits } from './components/Details/Credits';
import { Testeo } from './Testeo';
import { Actor } from './components/Actors/Actor';
import { Footer } from './layout/Footer';
import { Find } from './components/Find/Find';
import { MyListContext } from './contexts/MyList';
import { MyList } from './components/MyList/MyList';

export const MovieManiaApp = () => {
    const [myList, setMyList] = useState([])
    return (
        <div>
            <MyListContext.Provider
                value={{
                    myList,
                    setMyList
                }}>
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
                    <Route exact path='/tv/:RouteIdCredits/credits'>
                        <Credits />
                    </Route>
                    <Route exact path='/movie/:RouteIdCredits/credits'>
                        <Credits />
                    </Route>
                    <Route exact path='/:RouteTypeFilm/:RouteIdFilm'>
                        <ShowDetails />
                    </Route>
                    <Route exact path='/actor/:RouteTypeActor/:RouteIdActor'>
                        <Actor />
                    </Route>
                    <Route exact path='/testeo'>
                        <Testeo />
                    </Route>
                    <Route exact path='/search'>
                        <Find />
                    </Route>
                    <Route exact path='/mylist'>
                        <MyList />
                    </Route>
                </Switch>
                <footer>
                    <Footer />
                </footer>
            </MyListContext.Provider>
        </div>
        
    );
};
