import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import API_URL from "../config/api";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSaveBook = () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear: Number(publishYear),
    };
    axios
      .post(`${API_URL}/books`, data)
      .then((response) => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Book created successfully", { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar("An error happened. Please control fields", {
          variant: "error",
        });
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            className="border border-gray-500 px-4 py-2 w-full rounded-2xl mt-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            className="border border-gray-500 px-4 py-2 w-full rounded-2xl mt-2"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            className="border border-gray-500 px-4 py-2 w-full rounded-2xl mt-2"
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          className="bg-sky-500 text-white p-2 rounded-2xl mt-4 cursor-pointer"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
