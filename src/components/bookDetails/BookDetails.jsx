import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToWishList } from "../utility/AddStore";


const BookDetails = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    
    const {image, bookId: currentBookId} = book;

    const handleMarkAsRead = (id) => {
        addToStoreReadList(id)
    }

    const handleWishList = (id) => {
        addToWishList(id)
    }

    return (
        <div className="my-16">
            <h2>Book Details: {bookId}</h2>
            <img className="w-60" src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
            <button onClick={()=> handleWishList(bookId)} className="btn ml-6 btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetails;