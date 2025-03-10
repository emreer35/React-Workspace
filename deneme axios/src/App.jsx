import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const BASE_URL = "http://localhost:3000";

  const getUserId = async (id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data.id;
  };
  const getPostByuserId = async (id) => {
    const post = await axios.get(`${BASE_URL}/posts?userId=${id}`);
    return post.data;
  };

  const getPost = async () => {
    const userId = await getUserId(1);
    const post = await getPostByuserId(userId);
    console.log(post);
  };
  useEffect(() => {
    getPost();
  }, []);
  return <div></div>;
}

export default App;
