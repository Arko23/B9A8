// const getStoredInfo = ()=>{
//     const storedinfo = localStorage.getItem('info-check');
//     if(storedinfo)
//     {
//         return JSON.parse(storedinfo);
//     }
//     return [];
// }


// const saveInfo =bookId=>{
//     const storedinfo =getStoredInfo();
//     const exists =storedinfo.find(eachId => eachId ===bookId);
//     if(!exists)
//     {
//         storedinfo.push(bookId);
//         localStorage.setItem('info-check',JSON.stringify(storedinfo))
//     }

// }

// export{getStoredInfo,saveInfo}
const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveReadBook = (bookId) => {
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.includes(bookId);
    if (!exists) {
        storedReadBooks.push(bookId);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wish-list');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return [];
}

const saveWishList = (bookId) => {
    const storedWishList = getStoredWishList();
    const exists = storedWishList.includes(bookId);
    if (!exists) {
        storedWishList.push(bookId);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    }
}
// const removeReadBook = (bookId) => {
//     const storedReadBooks = getStoredReadBooks();
//     const updatedReadBooks = storedReadBooks.filter((id) => id !== bookId);
//     localStorage.setItem('read-books', JSON.stringify(updatedReadBooks));
// }

// const removeWishList = (bookId) => {
//     const storedWishList = getStoredWishList();
//     const updatedWishList = storedWishList.filter((id) => id !== bookId);
//     localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
// }
export { getStoredReadBooks, saveReadBook, getStoredWishList, saveWishList };
