import React, { Fragment } from 'react';

export const ReleaseDate = ({ Response = null }) => {
    return (
        <Fragment>
            {Response !== null && Response.cast.slice(0, Response.cast.length).map((m) => (
                <div>{m.media_type === 'movie' ? 
                    <p>{m.release_date}</p>    
                :
                    <p>{m.first_air_date}</p>   }
                </div>
            ))}
        </Fragment>
    );
}