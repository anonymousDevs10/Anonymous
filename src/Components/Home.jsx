import { useState, useEffect } from "react";
import "../CSS files/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userTimeout, setUserTimeout] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setUserTimeout(true);
    }, 30000);

    fetch("https://discreetnetsv.onrender.com/getPosts/portable")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setUserTimeout(false);
      })
      .catch((err) => {
        console.error(err);
        setUserTimeout(false);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(loadingTimeout);
      });
  }, []);

  return (
    <div className="home-container w-[100%] h-[100%]  ">
      {userTimeout ? (
        <div className="loading-error">
          Please check your network connection
        </div>
      ) : loading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="post w-[100vw]  bg-white border-b border-t border-black p-2 flex flex-col gap-1 "
          >
            <div className="post-header flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <img
                  src="https://blog.radware.com/wp-content/uploads/2020/06/anonymous.jpg"
                  alt="Profile Pic"
                  className="profile-pic w-[50px] h-[50px] rounded-full "
                />
                <h3 className="text-[12px] md:text-3xl font-bold ">
                  {post.username}
                </h3>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dots "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>

            <div className="w-[95%] self-end mb-1 ">
              <p className="caption">{post.caption}</p>
              <div className=" w-[100%] bg-black rounded-xl overflow-hidden border border-black flex items-center justify-center">
                <img
                  src={"https://discreetnetsv.onrender.com/" + post.img}
                  alt="Post Image"
                  className="post-img h-auto max-h-[35vh] "
                />
              </div>
            </div>

            <div className="post-actions flex items-center md:justify-center gap-5 md:gap-10 w-[95%] self-end">
              <button className="post-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4076 8.88257L14.4066 8.88529L12.4238 13.9788C12.2311 14.3162 11.9049 14.5 11.5875 14.5H5.505C4.86058 14.5 4.25 13.8983 4.25 13.0583V6.525C4.25 6.2001 4.36619 5.89611 4.56415 5.67615L8.99613 0.751729C9.21794 1.00363 9.40106 1.29238 9.54971 1.61501C9.58084 1.68516 9.59163 1.77753 9.57514 1.85814L9.57498 1.8581L9.57274 1.87068L8.88274 5.74568L8.7781 6.33333H9.375H13.5C14.0006 6.33333 14.5 6.80862 14.5 7.5V8.4C14.5 8.56857 14.4676 8.73121 14.4076 8.88257ZM1.5 14.5H0.5V6.33333H1.5C1.58811 6.33333 1.75 6.43362 1.75 6.66667V14.1667C1.75 14.3997 1.58811 14.5 1.5 14.5Z"
                    fill="white"
                    stroke="black"
                  />
                </svg>
              </button>

              <button className="post-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message-circle-2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                </svg>
              </button>

              <button className="post-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6339 11.6248L10.9267 11.7788L11.1829 11.5695C11.5318 11.2846 11.988 11.1024 12.5 11.1024C13.6144 11.1024 14.4333 11.9115 14.4333 12.8012C14.4333 13.6909 13.6144 14.5 12.5 14.5C11.3856 14.5 10.5667 13.6909 10.5667 12.8012C10.5667 12.6851 10.5843 12.5626 10.6168 12.4391L10.718 12.055L10.3668 11.8696L4.43344 8.73706L4.1366 8.58034L3.87915 8.79574C3.51678 9.09893 3.03801 9.28916 2.5 9.28916C1.34393 9.28916 0.5 8.45751 0.5 7.53012C0.5 6.60273 1.34393 5.77108 2.5 5.77108C3.03801 5.77108 3.51678 5.96131 3.87915 6.2645L4.13634 6.47969L4.43304 6.3234L10.308 3.22852L10.6521 3.04727L10.5611 2.66919C10.5223 2.50773 10.5 2.38014 10.5 2.25904C10.5 1.33165 11.3439 0.5 12.5 0.5C13.6561 0.5 14.5 1.33165 14.5 2.25904C14.5 3.18642 13.6561 4.01807 12.5 4.01807C11.962 4.01807 11.4832 3.82784 11.1208 3.52465L10.8637 3.30947L10.567 3.46576L4.69196 6.56064L4.34791 6.74188L4.43887 7.11996C4.47772 7.28143 4.5 7.40902 4.5 7.53012C4.5 7.65122 4.47772 7.77881 4.43887 7.94028L4.34785 8.31862L4.69225 8.49976L10.6339 11.6248Z"
                    fill="white"
                    stroke="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="loader-container w-[100%] h-[100%] flex flex-col items-center justify-center gap-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-loader animate-spin"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6l0 -3" />
        <path d="M16.25 7.75l2.15 -2.15" />
        <path d="M18 12l3 0" />
        <path d="M16.25 16.25l2.15 2.15" />
        <path d="M12 18l0 3" />
        <path d="M7.75 16.25l-2.15 2.15" />
        <path d="M6 12l-3 0" />
        <path d="M7.75 7.75l-2.15 -2.15" />
      </svg>
      <p>Loading...</p>
    </div>
  );
};

export default Home;
