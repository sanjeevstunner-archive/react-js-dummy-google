import "./App.scss";

function App() {
  return (
    <>
      <header>
        <div className="row">
          <div className="col-auto">
            <a href="">gmail</a>
          </div>
          <div className="col-auto">
            <a href="">images</a>
          </div>
        </div>
      </header>

      <h1>Google</h1>
      <input name="search-box" id="search-box" />
      <button type="submit">Google Search</button>
      <button type="submit">I'm feeling lucky</button>
      <div>
        Google is offered in
        <a href="">हिन्दी</a>
        <a href="">বাংলা</a>
        <a href="">తెలుగు</a>
        <a href="">मराठी</a>
        <a href="">தமிழ்</a>
        <a href="">ગુજરાતી</a>
        <a href="">ಕನ್ನಡ</a>
        <a href="">മലയാളം</a>
        <a href="">ਪੰਜਾਬੀ</a>
      </div>
      <footer>
        <>
          <a href="">About</a>
          <a href="">Advertising</a>
          <a href="">Business</a>
          <a href="">How search works</a>
        </>
        <>
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Settings</a>
        </>
      </footer>
    </>
  );
}

export default App;
