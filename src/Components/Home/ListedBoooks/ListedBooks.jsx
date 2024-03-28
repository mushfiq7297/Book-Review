import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../../Utility/LocalStorage";
import SingleBook from "../../../SingleBook/SingleBook";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="w-full mx-auto py-4 lg:w-3/5">
        <h2 className="text-6xl  text-center bg-gray-100 py-4  rounded-lg">
          Books
        </h2>
      </div>
      <div className="w-full mx-auto py-4 px-4 lg:w-3/5">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden justify-center lg:justify-start flex-nowrap  text-black">
          <Link
          to=''
          onClick={() =>setTabIndex(0)}
          
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
            ${tabIndex === 0? 'border border-b-0' : 'border-b'} 
            rounded-t-lg border-gray-400 text-black`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
           to={`./wishlist`}
          onClick={() =>setTabIndex(1)}
          
            
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
            ${tabIndex === 1? 'border border-b-0' : 'border-b'} 
            rounded-t-lg   border-gray-400 text-black`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Book</span>
          </Link>
          
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
