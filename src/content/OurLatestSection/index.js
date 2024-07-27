'use client';
import Link from "next/link";
import { useEffect } from "react";
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

export function OurLatestSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import Isotope and imagesLoaded inside the client-side context
      const Isotope = require('isotope-layout');
      const imagesLoaded = require('imagesloaded');

      const initIsotope = (selector, filterSelector, columnWidth) => {
        const container = document.querySelector(selector);
        if (container) {
          const iso = new Isotope(container, {
            itemSelector: '.filter-item',
            filter: filterSelector,
            masonry: { columnWidth },
          });

          const filterButtons = document.querySelectorAll('.filter-menu button');
          filterButtons.forEach(button => {
            button.addEventListener('click', () => {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              // Add active class to the clicked button
              button.classList.add('active');
              const filterValue = button.getAttribute('data-filter');
              iso.arrange({ filter: filterValue });
            });
          });
        }
      };

      const initIsotopes = () => {
        initIsotope('.filter-active', '*', null);
        initIsotope('.masonary-active, .woocommerce-Reviews .comment-list', '*', 1);
        initIsotope('.filter-active-cat1', '.cat1', 1);
      };

      const handleIsotopeOnImagesLoaded = () => {
        imagesLoaded('.filter-active, .masonary-active, .filter-active-cat1', () => {
          initIsotopes();
        });
      };

      handleIsotopeOnImagesLoaded();

      return () => {
        const filterButtons = document.querySelectorAll('.filter-menu button');
        filterButtons.forEach(button => {
          button.removeEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
          });
        });
      };
    }
  }, []);

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
      <section className="game-area-3 space-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-auto">
              <div
                className="title-area custom-anim-top wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span className="sub-title style3">
                  <span className="sub-title-shape icon-masking">
                    <span
                      className="mask-icon"
                      data-mask-src="/img/bg/section-title-bg.svg"
                    ></span>{" "}
                  </span>
                  Our Latest Game
                </span>
                <h2 className="sec-title">
                  Best Video Games In <span className="text-theme">2024</span>
                </h2>
                <p>
                  The rise of mobile gaming has significantly expanded the
                  gaming audience
                </p>
              </div>

              <div className="game-filter-btn filter-menu filter-menu-active custom-anim-top wow">
                <button data-filter="*" className="tab-btn active" type="button">
                  We Recommend
                </button>
                <button data-filter=".cat1" className="tab-btn" type="button">
                  Popular Games
                </button>
                <button data-filter=".cat2" className="tab-btn" type="button">
                  New Released
                </button>
                <button data-filter=".cat3" className="tab-btn" type="button">
                  Best Rating Games
                </button>
                <button data-filter=".cat4" className="tab-btn" type="button">
                  Old Released
                </button>
              </div>
            </div>
          </div>
          <div className="row gy-4 filter-active">
            <div className="col-lg-4 col-md-6 filter-item cat1">
              <div
                className="game-card style3"
                data-mask-src="/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="/img/game/game_card3_img-shape.jpg"
                >
                  <Link href="game-details.html">
                    <span className="game-rating">
                      <i className="fas fa-star"></i> 4.5
                    </span>
                    <img src="/img/game/3-1.png" alt="game image" />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">Desktop</div>
                  <h3 className="box-title">
                    <Link href="game-details.html">
                      Assassin’s Creed Mirage
                    </Link>
                  </h3>
                  <p className="game-content">$60.99</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 filter-item cat2">
              <div
                className="game-card style3"
                data-mask-src="/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="/img/game/game_card3_img-shape.jpg"
                >
                  <Link href="game-details.html">
                    <span className="game-rating">
                      <i className="fas fa-star"></i> 4.5
                    </span>
                    <img src="/img/game/3-2.png" alt="game image" />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">Mobile</div>
                  <h3 className="box-title">
                    <Link href="game-details.html">Valorant Game</Link>
                  </h3>
                  <p className="game-content">Free to play</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 filter-item cat2 cat3">
              <div
                className="game-card style3"
                data-mask-src="/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="/img/game/game_card3_img-shape.jpg"
                >
                  <Link href="game-details.html">
                    <span className="game-rating">
                      <i className="fas fa-star"></i> 4.5
                    </span>
                    <img src="/img/game/3-3.png" alt="game image" />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">PS 5</div>
                  <h3 className="box-title">
                    <Link href="game-details.html">Red Dead Redemption II</Link>
                  </h3>
                  <p className="game-content">$29.99</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 filter-item cat3 cat4">
              <div
                className="game-card style3"
                data-mask-src="/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="/img/game/game_card3_img-shape.jpg"
                >
                  <Link href="game-details.html">
                    <span className="game-rating">
                      <i className="fas fa-star"></i> 4.5
                    </span>
                    <img src="/img/game/3-4.png" alt="game image" />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">Desktop</div>
                  <h3 className="box-title">
                    <Link href="game-details.html">Call Of Duty : MW II</Link>
                  </h3>
                  <p className="game-content">$39.99</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 filter-item cat1 cat4">
              <div
                className="game-card style3"
                data-mask-src="/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="/img/game/game_card3_img-shape.jpg"
                >
                  <Link href="game-details.html">
                    <span className="game-rating">
                      <i className="fas fa-star"></i> 4.5
                    </span>
                    <img src="/img/game/3-5.png" alt="game image" />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">Tablet</div>
                  <h3 className="box-title">
                    <Link href="game-details.html">Genshin Impact</Link>
                  </h3>
                  <p className="game-content">Free to play</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 filter-item cat2 cat4">
              <div
                className="game-card style3"
                data-mask-src="/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="/img/game/game_card3_img-shape.jpg"
                >
                  <Link href="game-details.html">
                    <span className="game-rating">
                      <i className="fas fa-star"></i> 4.5
                    </span>
                    <img src="/img/game/3-6.png" alt="game image" />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">XBOX</div>
                  <h3 className="box-title">
                    <Link href="game-details.html">Jedi Fallen Order</Link>
                  </h3>
                  <p className="game-content">$59.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
