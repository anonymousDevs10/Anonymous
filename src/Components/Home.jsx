import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://discreetnetsv.onrender.com/main/portable")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts.reverse()))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      {/*Ive set up the main thing its just the styling and adding the componentsyou need to do*/}
      {/*To get the username for the post content its posts.username, img is https://discreetnetsv.onrender.com/posts.img, profile picture is a link too*/}
      {/*https://blog.radware.com/wp-content/uploads/2020/06/anonymous.jpg this is profile picture,, caption is posts.caption */}
      {/*Youre going to have to put icons for liking to goto comments and share links but for now ive setup the basic parts
      plus youre going to also need to be passing the username as a parameter from the login screen because we'll need it in the fetching posts area
      I used only one username rn so its just 2 posts thatll be available
      */}

      {/*Like you can just do {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.username}</h2>
        </div>
      ))}*/}

      {/*
      For uploading Ill add that either after you've made the screen for it or after youre done with this
      */}

      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img
              src="https://blog.radware.com/wp-content/uploads/2020/06/anonymous.jpg"
              alt="Profile Pic"
              className="profile-pic"
            />
            <h3>{post.username}</h3>
          </div>
          <img
            src={"https://discreetnetsv.onrender.com/" + post.img}
            alt="Post Image"
            className="post-img"
          />
          <p className="caption">{post.caption}</p>
          <div className="post-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
