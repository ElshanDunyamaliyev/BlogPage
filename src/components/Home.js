import React, { useEffect, useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import PostContainer from "./PostContainer";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=4&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, [skip]);

  const searchForPosts = () => {
    const inputVal = inputRef.current.value;
    setInputValue(inputVal);

    const fetchSearchedPosts = () => {
      fetch(`https://dummyjson.com/posts/search?q=${inputValue}`)
        .then((res) => res.json())
        .then((data) => setPosts(data.posts));
    };
    if (inputVal.trim().length) {
      fetchSearchedPosts();
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-center mt-2">
        <h1>Blog</h1>
        <input
          className="w-96 p-2.5 border rounded-lg"
          placeholder="Search for post"
          ref={inputRef}
          onChange={searchForPosts}
        />
      </div>
      <>
        {posts.length ? (
          posts.map((post) => <PostContainer key={post.id} post={post} />)
        ) : (
          <ErrorPage />
        )}
      </>
      {posts.length ? (
        <Button
          className="mt-5"
          onClick={() => setSkip((prevSkip) => prevSkip + 4)}
        >
          Load Post
        </Button>
      ) : null}
    </Container>
  );
};

export default Home;
