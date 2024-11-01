import { toast } from "react-toastify";

const getStoreReadList = () => {
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}


const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        console.log(id, 'This id is alrady exist')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to list')
    }
}

const getWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list')
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList;
    }
    else{
        return [];
    }
}


const addToWishList = (id) => {
    const storedWishList = getWishList();
    if(storedWishList.includes(id)){
        console.log(id, 'This wish list alrady exist')
    }
    else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wish-list', storedWishListStr)
    }
}

export {addToWishList}
export {addToStoreReadList, getStoreReadList}