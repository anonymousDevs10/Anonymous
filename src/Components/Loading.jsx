const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-green flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center -translate-y-28 gap-3 ">
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="67" height="67" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_145_8" transform="scale(0.0188679)" />
            </pattern>
            <image
              id="image0_145_8"
              width="53"
              height="53"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <h1 className="font-black text-3xl ">Anonymous</h1>
      </div>

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

export default Loading;
