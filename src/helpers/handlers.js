export const convertListObject = ( listData=[], numStart ) => {
    const listObject = [];
    for( let i of listData ){
        let objectData = {};
        objectData.img = i;
        objectData.alt = 'item_'.concat( numStart );
        listObject.push( objectData );

        numStart++;
    }
    return listObject
}

export const searchObject = ( id, listElements ) => {
    return listElements.filter( element => (
        element.id_artwork === id 
            ? element 
            : null
        )
    )[0];
}

export const searchObjectArtist = ( id, listElements ) => {
    return listElements.filter( element => (
        element.id_artist === id 
            ? element 
            : null
        )
    );
}