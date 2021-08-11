import { useState } from 'react';

export const usePaginator = () => {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [isFinalPage, setisFinalPage] = useState(false);

    const updatePageHandle = ( typePage, getTotalPages ) => {
        switch (typePage) {
            case 1:
                if(CurrentPage >= getTotalPages){
                    setisFinalPage(true);
                    setCurrentPage(CurrentPage);
                }
                else{
                    setCurrentPage(CurrentPage+1);
                    setisFinalPage(false);
                }
                break;

            case 2:
                if(CurrentPage <= 0){
                    setCurrentPage(CurrentPage-1);
                    setisFinalPage(false);
                }
                else{
                    setisFinalPage(true);
                    setCurrentPage(1);
                }
                break;
        
            default:
                break;
            }
        
        }

    // Then return the Current Page and the End Checker.
    return { CurrentPage, isFinalPage, updatePageHandle }
};
