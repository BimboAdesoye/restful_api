import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let url = "http://localhost:7070/posts/allPosts";
  const getFetchedData = async () => {
    let fetchedUrl = await axios(url);
    setData(fetchedUrl.data);
    // console.log(fetchedUrl.data);
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  function handlePost(e) {
    e.preventDefault();
    axios.post("http://localhost:7070/posts/create", {
      title: title,
      description: description,
    });
    window.location.reload();
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:7070/posts/delete/${id}`);
    window.location.reload();
  }

  return (
    <div className=" container text-center">
      <h1 className="text-danger">Home Page</h1>
      <div>
        <form className="border border-5 w-50 m-auto">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
          <br /> <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            id="description"
          />
          <br />
          <br />
          <button onClick={handlePost} className="btn btn-primary text-white">
            Post
          </button>
        </form>
      </div>
      <div>
        {data.map((datum) => {
          const { _id, title, description } = datum;
          return (
            <div key={_id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
