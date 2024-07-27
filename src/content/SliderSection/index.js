"use client";
import { useEffect } from "react";
import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Assuming you are using swiper/react for React usage
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export function SliderSection() {
  useEffect(() => {
    const elementsWithDataMaskSrc =
      document.querySelectorAll("[data-mask-src]");
    if (elementsWithDataMaskSrc.length > 0) {
      elementsWithDataMaskSrc.forEach((element) => {
        const maskSrc = element.getAttribute("data-mask-src");
        element.style.maskImage = `url(${maskSrc})`;
        element.style.webkitMaskImage = `url(${maskSrc})`;
        element.classList.add("bg-mask");
        element.removeAttribute("data-mask-src");
      });
    }
  }, []);

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
      <div className="slider-area">
        <div className="swiper th-slider has-shadow">
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
              <div
                className="blog-card style3"
                data-mask-src="/img/blog/blog_card3_bg.jpg"
              >
                <div
                  className="blog-img"
                  data-mask-src="/img/blog/blog_card3_img-shape.jpg"
                >
                  <Link href="blog-details.html">
                    <img src="/img/blog/blog_3_1.jpg" alt="blog image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="blog.html">
                      <i className="fa-regular fa-user"></i>By Jonson
                    </Link>
                    <Link href="blog.html">
                      <i className="fa-regular fa-calendar"></i>30 Nov, 2024
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="blog-details.html">
                      Strategies for Dominating Your Favorite Game
                    </Link>
                  </h3>
                  <Link href="blog-details.html" className="link-btn style2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="blog-card style3"
                data-mask-src="/img/blog/blog_card3_bg.jpg"
              >
                <div
                  className="blog-img"
                  data-mask-src="/img/blog/blog_card3_img-shape.jpg"
                >
                  <Link href="blog-details.html">
                    <img src="/img/blog/blog_3_2.jpg" alt="blog image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="blog.html">
                      <i className="fa-regular fa-user"></i>By Jonson
                    </Link>
                    <Link href="blog.html">
                      <i className="fa-regular fa-calendar"></i>16 March, 2024
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="blog-details.html">
                      Breaking Barriers and Shaping the Future
                    </Link>
                  </h3>
                  <Link href="blog-details.html" className="link-btn style2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="blog-card style3"
                data-mask-src="/img/blog/blog_card3_bg.jpg"
              >
                <div
                  className="blog-img"
                  data-mask-src="/img/blog/blog_card3_img-shape.jpg"
                >
                  <Link href="blog-details.html">
                    <img src="/img/blog/blog_3_3.jpg" alt="blog image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="blog.html">
                      <i className="fa-regular fa-user"></i>By Jonson
                    </Link>
                    <Link href="blog.html">
                      <i className="fa-regular fa-calendar"></i>17 June, 2024
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="blog-details.html">
                      Taking Customization to the Next Level
                    </Link>
                  </h3>
                  <Link href="blog-details.html" className="link-btn style2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="blog-card style3"
                data-mask-src="/img/blog/blog_card3_bg.jpg"
              >
                <div
                  className="blog-img"
                  data-mask-src="/img/blog/blog_card3_img-shape.jpg"
                >
                  <Link href="blog-details.html">
                    <img src="/img/blog/blog_3_1.jpg" alt="blog image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="blog.html">
                      <i className="fa-regular fa-user"></i>By Jonson
                    </Link>
                    <Link href="blog.html">
                      <i className="fa-regular fa-calendar"></i>30 Nov, 2024
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="blog-details.html">
                      Strategies for Dominating Your Favorite Game
                    </Link>
                  </h3>
                  <Link href="blog-details.html" className="link-btn style2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="blog-card style3"
                data-mask-src="/img/blog/blog_card3_bg.jpg"
              >
                <div
                  className="blog-img"
                  data-mask-src="/img/blog/blog_card3_img-shape.jpg"
                >
                  <Link href="blog-details.html">
                    <img src="/img/blog/blog_3_2.jpg" alt="blog image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="blog.html">
                      <i className="fa-regular fa-user"></i>By Jonson
                    </Link>
                    <Link href="blog.html">
                      <i className="fa-regular fa-calendar"></i>16 March, 2024
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="blog-details.html">
                      Breaking Barriers and Shaping the Future
                    </Link>
                  </h3>
                  <Link href="blog-details.html" className="link-btn style2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="blog-card style3"
                data-mask-src="/img/blog/blog_card3_bg.jpg"
              >
                <div
                  className="blog-img"
                  data-mask-src="/img/blog/blog_card3_img-shape.jpg"
                >
                  <Link href="blog-details.html">
                    <img src="/img/blog/blog_3_3.jpg" alt="blog image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="blog.html">
                      <i className="fa-regular fa-user"></i>By Jonson
                    </Link>
                    <Link href="blog.html">
                      <i className="fa-regular fa-calendar"></i>17 June, 2024
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link href="blog-details.html">
                      Taking Customization to the Next Level
                    </Link>
                  </h3>
                  <Link href="blog-details.html" className="link-btn style2">
                    READ MORE <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
