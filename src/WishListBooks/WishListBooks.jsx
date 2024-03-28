import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getStoredWishList } from "../Utility/LocalStorage";
import SingleBook from "../SingleBook/SingleBook";
const WishListBooks = () => {
  const books = useLoaderData();
  const [bookLists, setBookList] = useState([]);
  useEffect(() => {
    const storedWishIds = getStoredWishList();
    if (books.length > 0) {
      const listedBook = books.filter((book) =>
        storedWishIds.includes(book.id)
      );
      console.log(listedBook);

      setBookList(listedBook);
    }
  }, [books]);
  return (
    <div>
      <div>
        {bookLists.map((book) => (
          <SingleBook key={bookLists.id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default WishListBooks;
