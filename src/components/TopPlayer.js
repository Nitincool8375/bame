"use client"
import React from 'react'
import { useRef, useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import '../../node_modules/swiper/swiper-bundle.min.css'; // Import Swiper CSS
import Swiper from 'swiper';

const TopPlayer = () => {
    // ======================swiper pro gamer ========================= 
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            loop: true,
            centeredSlides: true,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: { 768: { slidesPerView: 1, spaceBetween: 15 }, 1024: { slidesPerView: 3, spaceBetween: 10 }, 1280: { slidesPerView: 5, spaceBetween: 15 } }
        });
        return () => swiper.destroy();
    }, []);

    const handlePrev = () => swiperRef.current?.swiper.slidePrev();
    const handleNext = () => swiperRef.current?.swiper.slideNext();

    useEffect(() => {
        const interval = setInterval(() => handleNext(), 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="team-sec-1 space">
            <div className="team-shape1-1 shape-mockup" data-top="0" data-right="0"><img src="/img/bg/footer2-bg.png"
                alt="img" /></div>
            <div className="container th-container3" style={{ background: '#0F1C23' }}>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
                            data-wow-delay="0.2s"><span className="sub-title"># Top World Class Gamer</span>
                            <h2 className="sec-title">Let’s See Our Pro Players</h2>
                        </div>
                    </div>
                </div>
                <div className="slider-area team-slider1">
                    <div className="swiper  th-slider has-shadow  mySwiper  swiper-container" id="teamSlider1" ref={swiperRef}>
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide  winer_card">
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-1.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-1.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Max Alexis</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-2.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-2.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Wilium Lili</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-3.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-3.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Mac Marsh</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card">
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-4.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-4.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Eva Raina</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-5.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-5.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Robin Cloth</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-1.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-1.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Max Alexis</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-2.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-2.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Wilium Lili</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card">
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-3.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-3.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Mac Marsh</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-4.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-4.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Eva Raina</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide winer_card" >
                                <div className="th-team team-card">
                                    <div className="team-card-corner team-card-corner1"></div>
                                    <div className="team-card-corner team-card-corner2"></div>
                                    <div className="team-card-corner team-card-corner3"></div>
                                    <div className="team-card-corner team-card-corner4"></div>
                                    <div className="img-wrap">
                                        <div className="team-img"><img src="/img/team/1-5.png" alt="Team" /></div><img
                                            className="game-logo" src="/img/team/game-logo1-5.png" alt="Team" />
                                    </div>
                                    <div className="team-card-content">
                                        <h3 className="box-title"><a href="team-details.html">Robin Cloth</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-button-prev" onClick={handlePrev}></div>
                    <div className="swiper-button-next" onClick={handleNext}></div>
                </div>
            </div>
        </section>




    )
}

export default TopPlayer
