import React, { Fragment, useContext } from 'react';
import { MyListContext } from '../../contexts/MyList';
import { ContainerMain } from '../../helpers/ContainerMain';

export const MyList = () => {

    const { myList } = useContext(MyListContext);

    console.log(myList)
    return (
        <Fragment>
            <ContainerMain>
                {myList.length >= 1 ?  
                    <div>
                        {myList.map((l) =>
                        <div key={l.id}>
                            <p>{l.id}</p>
                            <p>{l.mediatype}</p>
                            <p>{l.name}</p>
                        </div>
                        )}
                    </div>
                : <p>No tienes ninguna pelicula guardada.</p>}
            </ContainerMain>
        </Fragment>
    );
};
