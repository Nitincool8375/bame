import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="footer-wrapper footer-layout3 bg-black">
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <Link href="index.html">
                        <span className="logo-mask"></span>
                        <img src="/logo.svg" alt="Bame" />
                      </Link>
                    </div>
                    <p className="about-text">
                      Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions.
                    </p>
                    <h3 className="widget_title mb-3">
                      Follow <span className="text-theme">With Us:</span>
                    </h3>
                    <div className="th-widget-contact">
                      <div className="th-social style-mask">
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
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="blog.html">
                         <i className="fa-solid fa-angle-right"></i>Gaming
                        </Link>
                      </li>
                      <li>
                        <Link href="blog.html">
                         <i className="fa-solid fa-angle-right"></i>Products
                        </Link>
                      </li>
                      <li>
                        <Link href="blog.html">
                         <i className="fa-solid fa-angle-right"></i>All NFTs
                        </Link>
                      </li>
                      <li>
                        <Link href="blog.html">
                         <i className="fa-solid fa-angle-right"></i>Domain Name
                        </Link>
                      </li>
                      <li>
                        <Link href="blog.html">
                         <i className="fa-solid fa-angle-right"></i>Social Network
                        </Link>
                      </li>
                      <li>
                        <Link href="blog.html">
                         <i className="fa-solid fa-angle-right"></i>Collectibles
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Supports</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="contact.html">
                         <i className="fa-solid fa-angle-right"></i> Help & Support
                        </Link>
                      </li>
                      <li>
                        <Link href="contact.html">
                         <i className="fa-solid fa-angle-right"></i> Live Auctions
                        </Link>
                      </li>
                      <li>
                        <Link href="contact.html">
                         <i className="fa-solid fa-angle-right"></i> 24/7 Supports
                        </Link>
                      </li>
                      <li>
                        <Link href="contact.html">
                         <i className="fa-solid fa-angle-right"></i> Item Details
                        </Link>
                      </li>
                      <li>
                        <Link href="contact.html">
                         <i className="fa-solid fa-angle-right"></i> Setting &
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link href="contact.html">
                         <i className="fa-solid fa-angle-right"></i> Our News
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Our Gellary</h3>
                  <div className="widget-instagram-feeds">
                    <div className="gallery-thumb">
                      <img
                        src="/img/widget/widget-insta-feed1-1.png"
                        alt="Gallery Image"
                      />
                      <Link
                        href="/img/widget/widget-insta-feed1-1.png"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/img/widget/widget-insta-feed1-2.png"
                        alt="Gallery Image"
                      />
                      <Link
                        href="/img/widget/widget-insta-feed1-2.png"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/img/widget/widget-insta-feed1-3.png"
                        alt="Gallery Image"
                      />
                      <Link
                        href="/img/widget/widget-insta-feed1-3.png"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/img/widget/widget-insta-feed1-4.png"
                        alt="Gallery Image"
                      />
                      <Link
                        href="/img/widget/widget-insta-feed1-4.png"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/img/widget/widget-insta-feed1-5.png"
                        alt="Gallery Image"
                      />
                      <Link
                        href="/img/widget/widget-insta-feed1-5.png"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/img/widget/widget-insta-feed1-6.png"
                        alt="Gallery Image"
                      />
                      <Link
                        href="/img/widget/widget-insta-feed1-6.png"
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="copyright-wrap text-center bg-repeat"
          data-bg-src="/img/bg/jiji-bg.png"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <p
                  className="copyright-text bg-repeat"
                  data-bg-src="/img/bg/jiji-bg.png"
                >
                  <i className="fa-regular fa-copyright"></i> Copyright 2024
                  <Link href="index.html"> Bame.</Link> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
