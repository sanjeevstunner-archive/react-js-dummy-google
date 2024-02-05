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
    <div className="overflow-auto">
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
      <div className="languages justify-content-center text-center row row-cols-1 row-cols-md-3 row-cols-lg-auto g-4">
        <p className="col-md-12">Google is offered in</p>
        <a href="" className="col">
          हिन्दी
        </a>
        <a href="" className="col">
          বাংলা
        </a>
        <a href="" className="col">
          తెలుగు
        </a>
        <a href="" className="col">
          मराठी
        </a>
        <a href="" className="col">
          தமிழ்
        </a>
        <a href="" className="col">
          ગુજરાતી
        </a>
        <a href="" className="col">
          ಕನ್ನಡ
        </a>
        <a href="" className="col">
          മലയാളം
        </a>
        <a href="" className="col">
          ਪੰਜਾਬੀ
        </a>
      </div>
    </div>
  );
}

export default Body;
