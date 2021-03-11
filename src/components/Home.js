export const Home = () => (
  <div>
    <div className="container">
      <section className="hero">
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
      </section>
      <section className="specialization">
        <div>
          <i className="fab fa-android icon icon-primary" />
          <h4>Built for developers</h4>
          <p className="text-secondry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa facilis error!
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
          <i className="fas fa-pencil-ruler icon icon-primary" />
          <h4>Designed to be modern</h4>
          <p className="text-secondry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa facilis error!
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
          <i className="far fa-file-alt icon icon-primary" />
          <h4>Documentation for everything</h4>
          <p className="text-secondry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa facilis error!
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>
    </div>
    <hr />
    <div className="container">
      <section className="partners">
        <span className="partner-logo">
          <i className="icon fab fa-airbnb" />
          Airbnb
        </span>
        <span className="partner-logo">
          <i className="icon fab fa-twitter" />
          Twitter
        </span>
        <span className="partner-logo">
          <i className="icon fab fa-instagram" />
          Instagram
        </span>
        <span className="partner-logo">
          <i className="icon fab fa-pinterest-p" />
          Pinterest
        </span>
      </section>
    </div>
  </div>
);
