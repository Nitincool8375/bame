  "use client";
  import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react"; // Assuming you are using swiper/react for React usage
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  export function FeaturedSection() {
    const breakpoints = {
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    };
    return (
      <>
        <section className="feature-game-area-1 bg-black">
          <div className="container">
            <div className="slider-area feature-game-slider1">
              <div className="swiper th-slider">
                <Swiper
                  cssMode={true}
                  breakpoints={breakpoints}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  autoplay={{ delay: 3000 }}
                  modules={[Navigation, Keyboard, Autoplay, Mousewheel]}
                  className="swiper-wrapper"
                >
                  <SwiperSlide>
                    <div className="feature-game-card">
                      <div className="feature-game-card-img">
                        <a href="game-details.html">
                          <div className="feature-card-img-shape icon-masking">
                            <span
                              className="mask-icon"
                              data-mask-src="img/feature/feature-card-bg.png"
                            ></span>
                            <img
                              src="img/feature/feature-card-bg.png"
                              alt="img"
                            />
                          </div>
                          <img
                            src="img/feature/feature1-1.png"
                            alt="game image"
                          />{" "}
                        </a>
                        <a href="contact.html" className="th-btn">
                          PLAY NOW{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                      <div className="feature-game-card-details">
                        <h3 className="box-title">
                          <a href="game-details.html">AIR FIGHT</a>
                        </h3>
                        <p className="text">
                          Successful esports teams exhibit strong communication,
                          strategic.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-game-card">
                      <div className="feature-game-card-img">
                        <a href="game-details.html">
                          <div className="feature-card-img-shape icon-masking">
                            <span
                              className="mask-icon"
                              data-mask-src="img/feature/feature-card-bg.png"
                            ></span>
                            <img
                              src="img/feature/feature-card-bg.png"
                              alt="img"
                            />
                          </div>
                          <img
                            src="img/feature/feature1-2.png"
                            alt="game image"
                          />{" "}
                        </a>
                        <a href="contact.html" className="th-btn">
                          PLAY NOW{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                      <div className="feature-game-card-details">
                        <h3 className="box-title">
                          <a href="game-details.html">CAPTURE THE BASE</a>
                        </h3>
                        <p className="text">
                          The rise of mobile gaming has significantly expanded the
                          gaming.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-game-card">
                      <div className="feature-game-card-img">
                        <a href="game-details.html">
                          <div className="feature-card-img-shape icon-masking">
                            <span
                              className="mask-icon"
                              data-mask-src="img/feature/feature-card-bg.png"
                            ></span>
                            <img
                              src="img/feature/feature-card-bg.png"
                              alt="img"
                            />
                          </div>
                          <img
                            src="img/feature/feature1-3.png"
                            alt="game image"
                          />{" "}
                        </a>
                        <a href="contact.html" className="th-btn">
                          PLAY NOW{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                      <div className="feature-game-card-details">
                        <h3 className="box-title">
                          <a href="game-details.html">FLEET GAME</a>
                        </h3>
                        <p className="text">
                          It has also influenced game design reaching a broader
                          demographic.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-game-card">
                      <div className="feature-game-card-img">
                        <a href="game-details.html">
                          <div className="feature-card-img-shape icon-masking">
                            <span
                              className="mask-icon"
                              data-mask-src="img/feature/feature-card-bg.png"
                            ></span>
                            <img
                              src="img/feature/feature-card-bg.png"
                              alt="img"
                            />
                          </div>
                          <img
                            src="img/feature/feature1-1.png"
                            alt="game image"
                          />{" "}
                        </a>
                        <a href="contact.html" className="th-btn">
                          PLAY NOW{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                      <div className="feature-game-card-details">
                        <h3 className="box-title">
                          <a href="game-details.html">AIR FIGHT</a>
                        </h3>
                        <p className="text">
                          Successful esports teams exhibit strong communication,
                          strategic.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-game-card">
                      <div className="feature-game-card-img">
                        <a href="game-details.html">
                          <div className="feature-card-img-shape icon-masking">
                            <span
                              className="mask-icon"
                              data-mask-src="img/feature/feature-card-bg.png"
                            ></span>
                            <img
                              src="img/feature/feature-card-bg.png"
                              alt="img"
                            />
                          </div>
                          <img
                            src="img/feature/feature1-2.png"
                            alt="game image"
                          />{" "}
                        </a>
                        <a href="contact.html" className="th-btn">
                          PLAY NOW{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                      <div className="feature-game-card-details">
                        <h3 className="box-title">
                          <a href="game-details.html">CAPTURE THE BASE</a>
                        </h3>
                        <p className="text">
                          The rise of mobile gaming has significantly expanded the
                          gaming.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-game-card">
                      <div className="feature-game-card-img">
                        <a href="game-details.html">
                          <div className="feature-card-img-shape icon-masking">
                            <span
                              className="mask-icon"
                              data-mask-src="img/feature/feature-card-bg.png"
                            ></span>
                            <img
                              src="img/feature/feature-card-bg.png"
                              alt="img"
                            />
                          </div>
                          <img
                            src="img/feature/feature1-3.png"
                            alt="game image"
                          />{" "}
                        </a>
                        <a href="contact.html" className="th-btn">
                          PLAY NOW{" "}
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                      <div className="feature-game-card-details">
                        <h3 className="box-title">
                          <a href="game-details.html">FLEET GAME</a>
                        </h3>
                        <p className="text">
                          It has also influenced game design reaching a broader
                          demographic.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* <button
              data-slider-prev="#featureGameSlider1"
              className="slider-arrow style3 slider-prev"
            >
              <i className="fas fa-angle-left"></i>
            </button>
            <button
              data-slider-next="#featureGameSlider1"
              className="slider-arrow style3 slider-next"
            >
              <i className="fas fa-angle-right"></i>
            </button> */}
            </div>
          </div>
        </section>
      </>
    );
  }
