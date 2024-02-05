import { useState } from "react";

function Body() {
  const [text, setText] = useState("");

  const adjustTextareaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "24px";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(textarea.value);
  };

  return (
    <>
      <h1 id="brand" className="d-flex justify-content-center">
        Google
      </h1>
      <form action="" className="my-5 d-flex flex-column align-items-center">
        <div className="d-flex m-3 p-3 search-box align-items-center">
          <span className="material-symbols-outlined" id="search-icon">
            search
          </span>
          <textarea
            name="search-input"
            className="mx-1"
            id="search-input"
            value={text}
            onChange={adjustTextareaHeight}
            placeholder="Type here..."
          />
          <button>
            <span className="material-symbols-outlined">mic</span>
          </button>
          <button>
            <span className="material-symbols-outlined">photo_camera</span>
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="mx-2 px-3 py-2">
            Google Search
          </button>
          <button className="mx-2 px-3 py-2">I'm feeling lucky</button>
        </div>
      </form>
      <p className="d-flex justify-content-center">
        Google is offered in <a href="">हिन्दी</a> <a href="">বাংলা</a>{" "}
        <a href="">తెలుగు</a> <a href="">मराठी</a> <a href="">தமிழ்</a>{" "}
        <a href="">ગુજરાતી</a> <a href="">ಕನ್ನಡ</a> <a href="">മലയാളം</a>{" "}
        <a href="">ਪੰਜਾਬੀ</a>
      </p>
    </>
  );
}

export default Body;
