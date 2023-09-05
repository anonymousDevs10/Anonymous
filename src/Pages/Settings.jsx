import "../CSS files/Settings.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-[100vw] h-[100vh] ">
        <div className="w-[100%] p-4 flex items-center gap-8 ">
          <button onClick={() => navigate("/ProfilePage")}>
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.23485L12.7249 0L0 12.5L12.7249 25L15 22.7652L4.55013 12.5L15 2.23485Z"
                fill="black"
              />
            </svg>
          </button>
          <h2 className="font-bold text-xl ">Settings</h2>
        </div>

        {/*Account settings section*/}
        <div className="w-[100vw] flex  cursor-pointer mb-3 ">
          <div className="w-[20%] flex items-center justify-center  ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM16 4.8C18.656 4.8 20.8 6.944 20.8 9.6C20.8 12.256 18.656 14.4 16 14.4C13.344 14.4 11.2 12.256 11.2 9.6C11.2 6.944 13.344 4.8 16 4.8ZM16 27.52C12 27.52 8.464 25.472 6.4 22.368C6.448 19.184 12.8 17.44 16 17.44C19.184 17.44 25.552 19.184 25.6 22.368C23.536 25.472 20 27.52 16 27.52Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="w-[80%] p-2 ">
            <p className="font-bold text-sm">Account settings</p>
            <p className="leading-[18px] text-sm font-light ">
              Edit your account settings lorem loremlorem ipzuim ipzuim
              loremloremorem ipzuim loremlorem.
            </p>
          </div>
        </div>

        {/*Privacy and Security section*/}
        <div className="w-[100vw] flex  cursor-pointer mb-3 ">
          <div className="w-[20%] flex items-center justify-center  ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1.3335L4 6.66683V14.6668C4 22.0668 9.12 28.9868 16 30.6668C22.88 28.9868 28 22.0668 28 14.6668V6.66683L16 1.3335ZM14.6667 9.3335H17.3333V12.0002H14.6667V9.3335ZM14.6667 14.6668H17.3333V22.6668H14.6667V14.6668Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="w-[80%] p-2 ">
            <p className="font-bold text-sm ">Privacy and security settings</p>
            <p className="leading-[18px] text-sm font-light ">
              Edit your privacy settings lorem loremlorem ipzuim ipzuim
              loremloremorem ipzuim loremlorem.
            </p>
          </div>
        </div>

        {/*Notification settings section*/}
        <div className="w-[100vw] flex  cursor-pointer mb-3 ">
          <div className="w-[20%] flex items-center justify-center  ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 30C17.0625 30 18.75 28.6154 18.75 26.9231H11.25C11.25 28.6154 12.9187 30 15 30ZM26.25 20.7692V13.0769C26.25 8.35385 23.175 4.4 17.8125 3.35385V2.30769C17.8125 1.03077 16.5562 0 15 0C13.4438 0 12.1875 1.03077 12.1875 2.30769V3.35385C6.80625 4.4 3.75 8.33846 3.75 13.0769V20.7692L0 23.8462V25.3846H30V23.8462L26.25 20.7692Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="w-[80%] p-2 ">
            <p className="font-bold text-sm ">Notification settings</p>
            <p className="leading-[18px] text-sm font-light ">
              Edit your notification settings lorem loremlorem ipzuim ipzuim
              loremloremorem ipzuim loremlorem.
            </p>
          </div>
        </div>

        {/*Moderation settings section*/}
        <div className="w-[100vw] flex  cursor-pointer mb-3 ">
          <div className="w-[20%] flex items-center justify-center  ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 30H30L15 0L0 30ZM16.3636 25.2632H13.6364V22.1053H16.3636V25.2632ZM16.3636 18.9474H13.6364V12.6316H16.3636V18.9474Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="w-[80%] p-2 ">
            <p className="font-bold text-sm ">Moderation settings</p>
            <p className="leading-[18px] text-sm font-light ">
              Edit your moderation settings lorem loremlorem ipzuim ipzuim
              loremloremorem ipzuim loremlorem.
            </p>
          </div>
        </div>

        {/*Help and support settings section*/}
        <div className="w-[100vw] flex  cursor-pointer mb-3 ">
          <div className="w-[20%] flex items-center justify-center  ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM16.5 25.5H13.5V22.5H16.5V25.5ZM19.605 13.875L18.255 15.255C17.175 16.35 16.5 17.25 16.5 19.5H13.5V18.75C13.5 17.1 14.175 15.6 15.255 14.505L17.115 12.615C17.67 12.075 18 11.325 18 10.5C18 8.85 16.65 7.5 15 7.5C13.35 7.5 12 8.85 12 10.5H9C9 7.185 11.685 4.5 15 4.5C18.315 4.5 21 7.185 21 10.5C21 11.82 20.46 13.02 19.605 13.875Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="w-[80%] p-2 ">
            <p className="font-bold text-sm ">Help and support settings</p>
            <p className="leading-[18px] text-sm font-light ">
              Get help and support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
