import React, { Fragment } from 'react';

export const TitleFilm = ({ Response = null }) => {
    return (
        <Fragment>
            {Response !== null && Response.cast.slice(0, Response.cast.length).map((m) => (
                <div> 
                    {m.media_type === 'movie' ? <p>{m.title}</p> : <p>{m.name}</p>}    
                </div>
            ))}
        </Fragment>
    );
}