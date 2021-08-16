import React, { Fragment, useEffect, useState } from 'react';

export const InfoMessage = (props) => {
    const [isActive, setisActive] = useState(false)

    useEffect(() => {
        setisActive(true);
            setTimeout(() => {
                setisActive(false);
            }, 5000);
    }, [props])

    return (
        <Fragment>
            {isActive === true && 
            <div 
                className='msg_containerMain' 
                style={{backgroundColor: props.theme}}>
                {props.children}
            </div>}
        </Fragment>
    );
};
