import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // test API URL
  const BASE_URL = "http://localhost:3000";

  // Get Islemii
  const getAllPosts = async () => {
    const posts = await axios.get(BASE_URL + "/posts");
    console.log(posts.data);
  };
  const getPostById = async (PostId) => {
    const response = await axios.get(BASE_URL + "/posts/" + PostId);
    console.log(response.data);
  };

  // Post Islemii
  const addPost = async (newPost) => {
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    console.log(response.data);
  };

  //PUT Islemi

  const updatePost = async (id, data) => {
    const response = await axios.put(`${BASE_URL}/posts/${id}`, data);
    console.log(response.data);
  };


  // DELETE ISLEMI

  const deletePost = async (id) => {
    await axios.delete(`${BASE_URL}/posts/${id}`)
  }


  useEffect(() => {
    //GET
    // getAllPosts()
    // getPostById(1);

    //POST
    // const newPost = {
    //   "title": "Bu bir deneme projesidir",
    //   "views": 569
    // }
    // addPost(newPost)

    // PUT

    const updatedPost = {
      title: "Bu Bir updated post",
      views: 1000,
    };

    updatePost(2, updatedPost);

    // DELETE POST

    // deletePost('9cd4')
  }, []);
  return <div></div>;
}

export default App;
