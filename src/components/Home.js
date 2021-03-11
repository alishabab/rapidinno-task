const Home = () => (
  <div className="container">
    <div className="hero">
      <div className="banner-info">
        <h1>
          Welcome to
          <span className="text-highlight"> Landkit</span>
          .
        </h1>
        <h1>
          Develop anything.
        </h1>
        <p className="text-secondry">
          Build a beautiful, modern website with flexible Bootstrap components built from scratch.
        </p>
        <div>
          <button className="btn btn-primary" type="button">
            View all pages &nbsp;
            <i className="fas fa-arrow-right" />
          </button>
          <button className="btn btn-secondry" type="button">
            Documentation
          </button>
        </div>
      </div>
      <div className="banner-img">
        <img src="https://i.pinimg.com/originals/14/28/7f/14287f07df9c0a7278c167af57ee3194.jpg" alt="hero" />
      </div>
    </div>
  </div>
);

export default Home;
