"use client"
import Link from "next/link";
import { useEffect } from "react";

export function CommunitySection() {
    useEffect(() => {
        const elementsWithDataMaskSrc = document.querySelectorAll('[data-mask-src]');
        if (elementsWithDataMaskSrc.length > 0) {
          elementsWithDataMaskSrc.forEach((element) => {
            const maskSrc = element.getAttribute('data-mask-src');
            element.style.maskImage = `url(${maskSrc})`;
            element.style.webkitMaskImage = `url(${maskSrc})`;
            element.classList.add('bg-mask');
            element.removeAttribute('data-mask-src');
          });
        }
      }, []);
  return (
    <>
      <section className="space-bottom">
        <div className="container">
          <div className="cta-wrap3">
            <div className="row gx-0 gy-40 align-items-center flex-row-reverse">
              <div className="col-xl-7 mb-4 mb-md-0">
                <div
                  className="cta-thumb3-1 custom-anim-left wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <img src="/img/normal/cta3-1.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-5">
                <div
                  className="title-area mb-0 custom-anim-left wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <span className="sub-title style3">
                    <span className="sub-title-shape icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="/img/bg/section-title-bg.svg"
                      ></span>{" "}
                    </span>
                    Explore a New Dimension
                  </span>
                  <h2 className="sec-title mb-0">
                    Ready to unlock your potentials in a world of fun
                  </h2>
                  <p className="mt-20 mb-30">
                    The rise of mobile gaming has significantly expanded the
                    gaming audience, reaching a broader demographic. It has also
                    influenced game design
                  </p>
                  <Link href="contact.html" className="th-btn">
                    JOIN COMMUNITY{" "}
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
