import React, { useEffect, useState } from 'react';

export const usePaginator = ({ numPage, totalPages  }) => {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [isFinalPage, setisFinalPage] = useState(false);
    useEffect(() => {
        if( numPage < 1){
            setisFinalPage(true);
        }
        else if( totalPages === numPage ){
            setisFinalPage(true);
        }

        // if the current page is not the final...
        setCurrentPage(numPage)
    }, [numPage, totalPages])
    return { CurrentPage, isFinalPage }
};
