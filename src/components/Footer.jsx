function Footer() {
  return (
    <footer>
      <div className="p-3">
        <a href="">India</a>
      </div>
      <hr className="m-0" />
      <div className="d-flex justify-content-between p-3 row row-cols-1 row-cols-md-3 row-cols-lg-auto align-items-center">
        <>
          <a className="col" href="">
            About
          </a>
          <a className="col" href="">
            Advertising
          </a>
          <a className="col" href="">
            Business
          </a>
          <a className="col" href="">
            How search works
          </a>
        </>
        <>
          <a className="col" href="">
            Privacy
          </a>
          <a className="col" href="">
            Terms
          </a>
          <a className="col" href="">
            Settings
          </a>
        </>
      </div>
    </footer>
  );
}

export default Footer;
