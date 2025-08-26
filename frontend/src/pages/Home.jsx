import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";
import { useEffect, useState } from "react";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-2">
        <button
          className="cursor-pointer bg-sky-300 hover:bg-sky-600 px-4 py-2 mr-2 text-white rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
        <button
          className="cursor-pointer bg-sky-300 hover:bg-sky-600 px-4 py-2 text-white rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : ""}
      {showType == "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}

export default Home;
