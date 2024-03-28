const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read-list');
    if(storedReadList){
        return JSON.parse(storedReadList);
    }
    return [];
}

const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}



function saveReadList(id) {
    const getStoredReadLists = getStoredReadList();
    const exists = getStoredReadLists.find(bookId => bookId === id);
    if (!exists) {
        getStoredReadLists.push(id);
        localStorage.setItem('read-list', JSON.stringify(getStoredReadLists));
    }



}

const saveWishList = id =>{
    const getStoredWishLists = getStoredWishList();
    const exists = getStoredWishLists.find(bookId => bookId === id)
    if(!exists){
        getStoredWishLists.push(id);
        localStorage.setItem('wish-list', JSON.stringify(getStoredWishLists))
    }

}


export{getStoredReadList, saveReadList, getStoredWishList, saveWishList}