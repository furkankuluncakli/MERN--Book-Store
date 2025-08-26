import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useState } from "react";
import { useSnackbar } from "notistack";


function DeleteBook() {
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar("An error happened. Please try again", { variant: "error" });
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1>Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-2xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure Do You Want To Delete This Book?</h3>
        <button className="px-4 py-2 rounded-2xl bg-red-600 text-white mt-4  cursor-pointer" onClick={handleDeleteBook}>Delete</button>
      </div>
    </div>
  );
}

export default DeleteBook;
