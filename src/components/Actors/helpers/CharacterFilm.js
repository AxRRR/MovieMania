import React, { Fragment } from 'react';

export const CharacterFilm = ({ Response = null }) => {
    return (
        <Fragment>
            {Response !== null && Response.cast.slice(0, Response.cast.length).map((m) => (
                <div>{m.media_type === 'movie' ? 
                    <p>{m.character}</p>    
                :
                    <p>{m.character}</p>   }
                </div>
            ))}
        </Fragment>
    );
};
