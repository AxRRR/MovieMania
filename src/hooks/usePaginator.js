import { useState } from 'react';
//{ numPage, totalPages  }
export const usePaginator = () => {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [isFinalPage, setisFinalPage] = useState(false);

    const updatePageHandle = ( typePage, getTotalPages ) => {
        if( CurrentPage < 1 || CurrentPage > getTotalPages){

            // if the current page is the end or start of the list...
            setisFinalPage(true);
            setCurrentPage(1);

        } else {
        switch (typePage) {
            case 1:
                setCurrentPage(CurrentPage+1);
                setisFinalPage(false);
                break;

            case 2:
                setCurrentPage(CurrentPage-1);
                setisFinalPage(false);
                break;
        
            default:
                break;
            }
        
        }
    }

    // Then return the Current Page and the End Checker.
    return { CurrentPage, isFinalPage, updatePageHandle }
};
