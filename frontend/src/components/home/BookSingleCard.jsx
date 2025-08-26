import { BiUserCircle } from "react-icons/bi";
import { BsFillTrashFill, BsInfoCircle, BsPencil } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function BookSingleCard({ book }) {
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-2xl"
    >
      <h2 className="absolute top-1 right-1 bg-amber-600 px-3 py-0.5 rounded-xl text-white">
        {book.publishYear}
      </h2>
      <p className=" my-2 text-gray-400">{book._id}</p>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-400 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-400 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-500 hover:text-green-700 transition-colors duration-200" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <BsPencil className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-200" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <BsFillTrashFill className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default BookSingleCard;
