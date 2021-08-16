import React, { Fragment, useContext, useEffect } from 'react';
import { MyListContext } from '../../contexts/MyList';
import { ContainerMain } from '../../helpers/ContainerMain';
import { OriginalQualityImage } from '../../helpers/Utils';
import UpdateMyList from './ListHandler';
import {Helmet} from 'react-helmet';

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
                            {/* <p>{l.id}</p> */}
                            {/* <p>{l.mediatype}</p> */}
                            <p className='list_text'>{l.name}</p>
                            <p
                                className='list_text--vinculo'
                                onClick={() => UpdateMyList(myList, setMyList, 'delete', l.id)}>
                                    Borrar de la lista</p>
                        </div>
                        )}
                    </div>
                : <p>No tienes ninguna pelicula guardada.</p>}
                {myList.length >= 1 && 
                <div className='list_containerMain--supersmall'>
                    <h1>Tu lista:</h1>
                    <p>Peliculas/Series guardadas:</p>
                    <p>
                        {myList.length}
                    </p>
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
