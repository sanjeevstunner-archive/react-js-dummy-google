import "./App.scss";

function App() {
  return (
    <>
      <header>
        <>
          <h5>gmail</h5>
          <h5>images</h5>
        </>
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
          <h5>About</h5>
          <h5>Advertising</h5>
          <h5>Business</h5>
          <h5>How search works</h5>
        </>
        <>
          <h5>Privacy</h5>
          <h5>Terms</h5>
          <h5>Settings</h5>
        </>
      </footer>
    </>
  );
}

export default App;
