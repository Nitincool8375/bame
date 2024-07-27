'use client';
import Link from "next/link";
import { useEffect } from "react";

export function SubscribeSection() {
    useEffect(() => {
        const elementsWithDataBgSrc = document.querySelectorAll('[data-bg-src]');
        if (elementsWithDataBgSrc.length > 0) {
          elementsWithDataBgSrc.forEach((element) => {
            const bgSrc = element.getAttribute('data-bg-src');
            element.style.backgroundImage = `url(${bgSrc})`;
            element.removeAttribute('data-bg-src');
            element.classList.add('background-image');
          });
        }
      }, []);
  return (
    <>
      <div
        className="subscribe-area-1 position-relative z-index-common"
        data-pos-for=".footer-wrapper"
        data-sec-pos="bottom-half"
      >
        <div className="container">
          <div
            className="subscribe-wrap1"
            data-bg-src="/img/bg/subscribe1-bg-shape.png"
          >
            <div className="row align-items-center gy-30">
              <div className="col-12 d-flex justify-content-center">
                <div className="title-area mb-0 text-center">
                  <h2 className="sec-title">Connect with us</h2>
                  <div className="th-widget-contact mt-4">
                      <div className="th-social sub-social style-mask">
                        <Link className="facebook" href="#" >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="twitter" href="#">
                          <img
                            src="/img/icon/x-twitter-icon.svg"
                            alt="icon"
                          />
                        </Link>
                        <Link className="instagram" href="#" >
                          <img
                            src="/img/icon/instagram-icon.svg"
                            alt="icon"
                          />{" "}
                        </Link>
                        <Link className="linkedin" href="#" >
                          <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="google-play" href="#" >
                          <img
                            src="/img/icon/google-playstore-icon.svg"
                            alt="icon"
                          />
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
