import "./CSS files/HomePage.css";
import {
  Header,
  Home,
  Notification,
  Search,
  Messages,
} from "./Components/CompExport";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { setPageSwitch } from "./Features/Actions";

function HomePage() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.actions.pageSwitch.value);

  // This variable controls the visibility of the menu.
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {/*Parent container*/}
      <div className="mobile-view-container relative overflow-hidden">
        {/* {Header container} */}
        <div className="header w-full h-[8%] bg-black">
          <Header />
        </div>

        {/* Container for each section */}
        <div className="page-container w-full h-[92%] ">
          {/* Conditional rendering of different sections based on the 'page' state */}
          {page === 0 && <Home />}
          {page === 1 && <Notification />}
          {page === 2 && <Search />}
          {page === 3 && <Messages />}
        </div>

        {/* {Menu bar} */}
        <div className="menu-tab absolute inset-0 bottom-[-90%] m-auto bg-black rounded-xl  w-[80%] h-[5%] text-white flex items-center justify-around">
          <button
            onClick={() => (dispatch(setPageSwitch(0)), setToggleMenu(false))}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2 24.0244V15.5452H16.8V24.0244H23.8V12.7188H28L14 0L0 12.7188H4.2V24.0244H11.2Z"
                style={
                  page === 0
                    ? { fill: "rgb(123, 179, 198)" }
                    : { fill: "white" }
                }
              />
            </svg>
          </button>
          <button
            onClick={() => (dispatch(setPageSwitch(1)), setToggleMenu(false))}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 29 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 24.0244C16.4937 24.0244 18.125 22.9156 18.125 21.5604H10.875C10.875 22.9156 12.4881 24.0244 14.5 24.0244ZM25.375 16.6323V10.4722C25.375 6.68988 22.4025 3.52358 17.2188 2.68581V1.84803C17.2188 0.825455 16.0044 0 14.5 0C12.9956 0 11.7812 0.825455 11.7812 1.84803V2.68581C6.57938 3.52358 3.625 6.67756 3.625 10.4722V16.6323L0 19.0964V20.3284H29V19.0964L25.375 16.6323Z"
                style={
                  page === 1
                    ? { fill: "rgb(123, 179, 198)" }
                    : { fill: "white" }
                }
              />
            </svg>
          </button>
          <button>
            <svg
              width="22"
              height="22"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setToggleMenu(!toggleMenu)}
              style={
                toggleMenu
                  ? { transform: "rotate(45deg)", transition: "300ms" }
                  : { transform: "rotate(0)", transition: "300ms" }
              }
            >
              <path
                d="M28 16H16V28H12V16H0V12H12V0H16V12H28V16Z"
                style={toggleMenu ? { fill: "grey" } : { fill: "white" }}
              />
            </svg>
          </button>
          <button
            onClick={() => (dispatch(setPageSwitch(2)), setToggleMenu(false))}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0114 17.6101H18.7467L18.2985 17.1778C19.8674 15.3528 20.8119 12.9834 20.8119 10.4059C20.8119 4.65866 16.1532 0 10.4059 0C4.65866 0 0 4.65866 0 10.4059C0 16.1532 4.65866 20.8119 10.4059 20.8119C12.9834 20.8119 15.3528 19.8674 17.1778 18.2985L17.6101 18.7467V20.0114L25.6146 28L28 25.6146L20.0114 17.6101ZM10.4059 17.6101C6.41967 17.6101 3.20183 14.3922 3.20183 10.4059C3.20183 6.41967 6.41967 3.20183 10.4059 3.20183C14.3922 3.20183 17.6101 6.41967 17.6101 10.4059C17.6101 14.3922 14.3922 17.6101 10.4059 17.6101Z"
                style={
                  page === 2
                    ? { fill: "rgb(123, 179, 198)" }
                    : { fill: "white" }
                }
              />
            </svg>
          </button>
          <button
            onClick={() => (dispatch(setPageSwitch(3)), setToggleMenu(false))}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 29 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1 0H2.9C1.305 0 0.0145 1.0811 0.0145 2.40244L0 24.0244L5.8 19.2196H26.1C27.695 19.2196 29 18.1385 29 16.8171V2.40244C29 1.0811 27.695 0 26.1 0ZM5.8 8.40855H23.2V10.811H5.8V8.40855ZM17.4 14.4147H5.8V12.0122H17.4V14.4147ZM23.2 7.20733H5.8V4.80489H23.2V7.20733Z"
                style={
                  page === 3
                    ? { fill: "rgb(123, 179, 198)" }
                    : { fill: "white" }
                }
              />
            </svg>
          </button>
        </div>

        <CSSTransition
          in={toggleMenu}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          {/* This component handles the transition for the PostMenu */}
          <PostMenu />
        </CSSTransition>
      </div>
    </>
  );
}

//This is a functional component for the PostMenu
const PostMenu = () => {
  return (
    <div className="newPostMenu w-[80%] h-[10%] md:h-[6%] absolute inset-0 m-auto bottom-[-70%] md:bottom-[-76%] flex flex-col items-center justify-between">
      {/* Buttons for creating a new post and uploading an image */}
      <button className="btn-style">Create new post</button>
      <button className="btn-style">Upload image</button>
    </div>
  );
};

export default HomePage;
