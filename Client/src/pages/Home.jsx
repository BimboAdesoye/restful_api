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
  }

  return (
    <div className=" container text-center">
      <h1 className="text-danger">Home Page</h1>
      <div>
        <form action="" className="">
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
            onChange={(e) => setDescription(e.target.description)}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
