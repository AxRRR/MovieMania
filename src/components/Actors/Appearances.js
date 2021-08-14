import React, { Fragment, useEffect, useState } from 'react';
import { httpRequest } from '../../helpers/httpRequest';
import { APIUrl, MyApiKey } from '../../helpers/Utils';
// import { CharacterFilm } from './helpers/CharacterFilm';
import { ReleaseDate } from './helpers/ReleaseDate';
import { TitleFilm } from './helpers/TitleFilm';

export const Appearances = ({ Actor }) => {
    const [response, setResponse] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let requestUrl =`${APIUrl}person/${Actor.idActor}/combined_credits?api_key=${MyApiKey}&language=es-ES`;

            // setLoading(true);

            const [resp] = await Promise.all([
                httpRequest().get(requestUrl),
            ]);

            console.log(resp)
            setResponse(resp);
            // setLoading(false);
        };
        
        fetchData();
    }, [Actor])

    return (
        <Fragment>
            <div className='inf_containerMain'>
            <table>
                <tr>
                    <th>Fecha</th>
                    <th>Pelicula/Serie</th>
                    {/* <th>Papel</th> */}
                </tr>
                <tr>
                    {!!response && 
                        <Fragment> 
                            <td>
                                <ReleaseDate Response={response} />
                            </td>
                            <td>
                                <TitleFilm Response={response} />
                            </td>
                            {/* <td>
                                <CharacterFilm Response={response} />
                            </td> */}
                        </Fragment>
                    }
                </tr>
                </table>
            </div>
        </Fragment>
    );
};