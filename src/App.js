import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import EditPost from "./EditPost";
import useAxiosFetch from "./Hooks/useAxiosFetch";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  // manullay function to get api data
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       setPost(response.data);
  //     } catch (err) {
  //       if (err.message) {
  //         // Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchPost();
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout  />}>
        <Route path="/edit/:id" element={<EditPost />} />
        <Route
          index
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
