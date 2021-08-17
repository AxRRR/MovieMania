import React, { Fragment, useContext } from 'react';
import { MyListContext } from '../../contexts/MyList';
import { ContainerMain } from '../../helpers/ContainerMain';
import { OriginalQualityImage } from '../../helpers/Utils';
import UpdateMyList from './ListHandler';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';

export const MyList = () => {
    // My List Context
    const { myList, setMyList } = useContext(MyListContext);

    return (
        <Fragment>
            <Helmet>
                <title>MovieMania - Tu Lista de Peliculas</title>
            </Helmet>
            <ContainerMain>
                {myList.length >= 1 ?  
                    <div className='list_containerMain--small'>
                        {myList.map((l) =>
                        <div className='list_containerMain--individual' key={l.id}>
                            <div>
                                <img 
                                    src={`${OriginalQualityImage}${l.poster}`}
                                    className='list_poster'
                                    alt={l.id}
                                />
                            </div>
                            <p className='list_text'>{l.name}</p>
                            <p
                                className='list_text--vinculo'
                                onClick={() => UpdateMyList(myList, setMyList, 'delete', l.id)}>
                                    Borrar de la lista
                            </p>
                            <Link to={`/${l.mediatype}/${l.id}`}>
                                <p className='list_text--vinculo'>Ir a la página</p>
                            </Link>
                        </div>
                        )}
                    </div>
                : <p>No tienes ninguna pelicula guardada.</p>}
                {myList.length >= 1 && 
                <div className='list_containerMain--supersmall'>
                    <h1>Tu lista:</h1>
                    <p className='list_text--title'>Peliculas/Series guardadas:</p>
                    <p className='list_text--count'>{myList.length}</p>
                    <button 
                        className='list_btnStyle--red'
                        onClick={() => UpdateMyList(myList, setMyList, 'deleteall')}>
                            Limpiar toda la lista
                    </button>
                </div>}
            </ContainerMain>
        </Fragment>
    );
};
