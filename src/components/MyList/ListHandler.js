
// handler List - Add/Delete
export default function UpdateMyList(myList, setMyList, type, id, mediatype, name, poster_path){

    switch (type) {
        case 'add':
            // if we have more than one repeated item... just return nothing.
            if(myList.length >= 1) {
                for (let i = 0; i < myList.length; i++) {
                    if(myList[i].id === id) return;
                }
            }
            // If we don't have repeating items...
            setMyList([...myList, {
                id: id,
                mediatype: mediatype,
                name: name,
                poster: poster_path
            }]);
            break;
            
        case 'delete':
            let updateListItems = myList.filter(film => film.id !== id);
                setMyList(updateListItems);
            break;

        case 'deleteall':
                setMyList([]);
            break;
    
        default:
            break;
    }
    
}
