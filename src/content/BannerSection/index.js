export function BannerSection() {
  return (
    <>
      <div className="th-hero-wrapper hero-3" id="hero">
        <div
          className="th-hero-bg"
        >
            <img src="/img/hero/hero-bg3-1.png" alt="" />
        </div>
        <div className="container">
          <div className="hero-style3">
            <span
              className="sub-title custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              Play, Improve & Win
            </span>
            <h1
              className="hero-title custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.2s"
            >
              Online Fantasy
            </h1>
            <h1
              className="hero-title style2 text-theme custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.3s"
            >
              Video Game
            </h1>
            <div
              className="btn-group custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.5s"
            >
              <a href="contact.html" className="th-btn">
                EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
