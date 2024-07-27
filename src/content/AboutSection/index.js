"use client";
import Link from "next/link";
import { useEffect } from "react";

export function AboutSection() {
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
  return (
    <>
      <div className="overflow-hidden space" id="about-sec">
        <div className="about-bg-img shape-mockup" data-top="0" data-left="0">
          <img src="/img/about/about-bg1.png" alt="img" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-50 mb-xl-0">
              <div className="img-box4">
                <div
                  className="custom-anim-left wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img class src="/img/about/about4-1.png" alt="About" />
                </div>
                <div className="img2">
                  <img src="/img/about/about4-2.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-wrap4">
                <div
                  className="title-area mb-35 custom-anim-left wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <span className="sub-title style3">
                    <span className="sub-title-shape icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="/img/bg/section-title-bg.svg"
                      >
                        <img src="/img/about/section-title-bg.svg" alt="" />
                      </span>{" "}
                    </span>
                    About Our Gaming Site
                  </span>
                  <h2 className="sec-title mb-0">
                    Beyond Gaming It's an Odyssey.
                  </h2>
                  <p className="mt-20">
                    Emerging trends in the esports industry include the growth
                    of mobile esports, the integration of virtual reality in
                    gaming experiences, and the increasing involvement of
                    traditional sports.
                  </p>
                </div>
                <div className="row gy-60">
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">1.6</span>K
                          <span className="text-theme fw-medium">+</span>
                        </h2>
                        <p className="box-text">Our Daily Game Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">50</span>M
                        </h2>
                        <p className="box-text">Game Downloads</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">200</span>
                          <span className="text-theme fw-medium">+</span>
                        </h2>
                        <p className="box-text">Game Launched</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">3.6</span>M
                        </h2>
                        <p className="box-text">Gaming Project Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap mt-50">
                  <Link href="contact.html" className="th-btn">
                    EXPLORE MORE{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
