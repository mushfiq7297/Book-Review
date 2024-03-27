import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../../Utility/LocalStorage";


const ListedBooks = () => {
    const books = useLoaderData();
    useEffect(() =>{
        const storeredReadIds = getStoredReadList();
        if(books.length > 0){
            // const listedBook = books.filter(book => storeredReadIds.includes(book.id))
            // console.log(listedBook)
            const listedBook = [];
            for(const id of storeredReadIds){
                const book = books.find(book => book.id === id);
                if(book){
                    listedBook.push(book);
                }
            }
            console.log(books, storeredReadIds, listedBook)
        }
    },[books])
    return (
        <div>
            <h1>This is listed books</h1>
        </div>
    );
};

export default ListedBooks;