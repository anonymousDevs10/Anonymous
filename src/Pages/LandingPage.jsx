import React, { useEffect, useRef } from "react";
import "../CSS files/LandingPage.css";

const LandingPage = () => {
  const movingObjectsContainerRef = useRef(null);
  const objectsRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const slideObjects = () => {
      console.log("slideObjects function called");
      console.log("Current currentIndex:", currentIndex);
      if (objectsRef.current) {
        console.log("objectsRef.current:", objectsRef.current);
        currentIndex = (currentIndex + 1) % objectsRef.current.children.length;
        console.log("New currentIndex:", currentIndex);
        movingObjectsContainerRef.current.scrollTo({
          left: currentIndex * 375,
          behavior: "smooth",
        });
      } else {
        console.log("objectsRef.current is null or undefined");
      }
    };

    console.log("Interval set up");
    const intervalId = setInterval(slideObjects, 4000);

    // Clean up the interval when the component unmounts
    return () => {
      console.log("Clearing interval");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="landing-body">
        <div className="landing-page-top"></div>
          <div>
            <img src="images/logo.png" alt="" className="landing-img" />
          </div>
          <h1 className="landing-header">Anonymous</h1>
          <p className="landing-page">
            Is a unique social media platform that values your privacy and allows
            you to connect with others in a truly anonymous way. Express yourself,
            share your thoughts, and discover new perspectives without the
            pressure of revealing your identity.
          </p>
        
        <div className="moving-objects-container" ref={movingObjectsContainerRef}>
          <div className="moving-objects" ref={objectsRef}>
            <div className="first object">
              <img src="images/Unfiltered Expressions.png" alt="" />
            </div>
            <div className="second object">
              <img src="images/Anonymity First.png" alt="" />
            </div>
            <div className="third object">
              <img src="images/Seamless Interaction.png" alt="" />
            </div>
          </div>
        </div>
        <footer className="landing-page">
          <p>
            Start connecting, sharing, and discovering without the burden of your
            identity. Welcome to Chat Anonymous.
          </p>
          <form action="">
            <button className="signup-button">Sign up</button>
            <button className="login-button">Login</button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
