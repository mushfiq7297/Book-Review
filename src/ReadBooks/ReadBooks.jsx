import { useState } from "react";
import { useEffect } from "react";
import { getStoredReadList } from "../Utility/LocalStorage";
import SingleBook from "../SingleBook/SingleBook";
import { useLoaderData } from "react-router-dom";
const ReadBooks = () => {
  const books = useLoaderData();
  const [bookLists, setBookList] = useState([]);
  useEffect(() => {
    const storedReadIds = getStoredReadList();
    if (books.length > 0) {
      const listedBook = books.filter((book) =>
        storedReadIds.includes(book.id)
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

export default ReadBooks;
