
const Book = ({ book }) => {
  const { image,
     tags,
     bookName,
    author,
    category,
    rating } = book;
  return (
    <div className="card bg-base-100 shadow-xl p-4 w-96 h-auto mx-auto">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="w-32 h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        <div className="badge text-green-500">{tags[0]}</div>
          <div className="badge text-green-500">{tags[1]}</div>
        </h2>
        <h2 className="text-xl font-bold">{bookName}</h2>
        <p>By: {author}</p>
        <div className="card-actions justify-between">
          <div className="">{category}</div>
          <div className="">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
