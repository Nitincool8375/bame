"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import TopPlayer from '@/components/TopPlayer';
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import { useAuth } from '../layout';
// import '../../node_modules/swiper/swiper-bundle.min.css'; // Import Swiper CSS

const page = () => {
  const { userData, setUserData, logout } = useAuth();
  let [gameList, setGameList] = useState([]);
  // =======================================game swipe============================
  const swiperGame = useRef(null);
  useEffect(() => {
    if (swiperGame.current) {
      const swiper = new Swiper(swiperGame.current, {
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: { slidesPerView: 1, spaceBetween: 5 },
          1024: { slidesPerView: 3, spaceBetween: 5 },
          1280: { slidesPerView: 5, spaceBetween: 5 },
        },
      });

      return () => swiper.destroy();
    }
  }, []);

  const handleGamePrev = () => swiperGame.current?.swiper.slidePrev();
  const handleGameNext = () => swiperGame.current?.swiper?.slideNext();


  // =====================================get the user game list==================================
  async function getUserGameList() {
    let token = localStorage.getItem('UserGameToken'); // Replace "your_bearer_token_here" with your actual bearer token

    let result = await fetch("http://localhost:5000/game/Getdashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    if (result.ok) {
      console.log("get user game list ")
      let jsonResponse = await result.json();
      console.log("game data list=>", jsonResponse);
      setGameList(jsonResponse.Games)
    } else {
      console.warn("user game Data list is not found");
    }
    // Handle the result as needed
  }


  // ================================check the token wither it is present or not====================
  useEffect(() => {
    console.log('page is refreshed');
    if (localStorage.getItem('GoogleGameToken')) {
      let x = jwtDecode(localStorage.getItem('GoogleGameToken'));

      setUserData(x);
      getUserGameList();
    }

  }, []);


  // =======================function to login with google=========================
  const handleLoginSuccess = async (credentialResponse) => {
    // console.log('token', credentialResponse);
    localStorage.setItem('GoogleGameToken', credentialResponse.credential);
    const decoded = jwtDecode(credentialResponse.credential);
    let { email, name } = decoded;
    setUserData(decoded);

    // console.log("email", email, "name", name);
    // ---------------------register api----------------------
    let result = await fetch("http://localhost:5000/game/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "Username": name, "Email": email }),
    })
    // console.log("result=>", result)
    // check account is create
    if (result.ok) {
      let jsonResponse = await result.json();
      console.log("jsonResponse=>", jsonResponse);
      localStorage.setItem('UserGameToken', jsonResponse.Accesstoken);
      getUserGameList()
    }


  };


  if (!localStorage.getItem('GoogleGameToken')) {
    return (
      <GoogleOAuthProvider clientId="809873110728-poaqifiglebqjhkrh5d1ar26nf50o7l5.apps.googleusercontent.com">
        <div className="login_box">
          <div className="log_box">
            <h1 className="mark">Game Marketplace</h1>
            <h1 className="login_text">Sign In</h1>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log('Login Failed');
              }}
            />

            <h1 className='text-center mark mt-4 '><Link href='/'><FontAwesomeIcon icon={faHouse} style={{ color: "#949494", }} /> Go Back To Home Page</Link></h1>
          </div>
        </div>
      </GoogleOAuthProvider>
    );
  }

  return (
    <div className='dashboard_box'>
      <div className='top_launch_game flex justify-end'>
        <Link href="/launchgame" className="th-btn style2">
          LAUNCH GAMES <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
        </Link>
      </div>
      <section className="overflow-hidden slide">
        <div className="container th-container2 "  >
          <div className="game-sec-wrap1 space"
            style={{ backgroundImage: `url('img/bg/blog-sec2-bg.png')` }}

          >
            <div className="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s"
              data-wow-delay="0.1s"><span className="sub-title" ># MY GAMES</span>
              <h2 className="sec-title">Manage Upcoming Game<span className="text-theme">!</span></h2>
            </div>
            {/* <div className="slider-area">
              <div className="swiper th-slider game-slider-1" id="gameSlider1"
                ref={swiperGame}>
                <div className="swiper-wrapper">



                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-2.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-2.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">Net Remaining Monies</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">Free</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Single player </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-3.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-3.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">Duty Balck Ops</a></h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Multiplayer </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-4.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-4.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Multiplayer </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-1.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-1.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">The Hunter Killer</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Single player </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-2.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-2.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">Net Remaining Monies</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">Free</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Single player </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-3.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-3.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">Duty Balck Ops</a></h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Single player </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-4.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-4.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Single player </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-4.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-4.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Multiplayer </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: '300px' }}>
                    <div className="game-card gradient-border">
                      <div className="game-card-img"><a href="tournament-details.html"><img
                        src="/1-4.png" alt="game image" /></a>
                        <div className="game-logo"><img src="/logo1-4.png" alt="game logo" />
                        </div>
                      </div>
                      <div className="game-card-details">
                        <h3 className="box-title"><a href="tournament-details.html">League of Legends</a>
                        </h3>
                        <p className="game-content">Entry Fee:<span className="text-theme">$10.00</span></p>
                        <p className="game-content">Players: <span className="text-theme"> Multiplayer </span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-pagination"></div>
              </div>
              <div className="swiper-button-prev" onClick={handleGamePrev}></div>
              <div className="swiper-button-next" onClick={handleGameNext}></div>
            </div> */}
          </div>
        </div>
      </section>


      <div className='my_game_cards flex justify-around flex-wrap'>
        {
          gameList.length !== 0 ? gameList.map((value, index) => (
            <div className='card_box' key={index}>
              <div className='card-img'>
                <img src='/1-2.png' alt={`Game ${index}`} />
              </div>
              <div className='card_det'>
                <div className='game_name_live flex justify-between  mt-4 mb-4'>
                  <h1 className='font-bold capitalize name'>The Hunter Killer</h1>
                  <p className='live'>LIVE</p>
                </div>
                <div className='game_entry'>
                  <h1>Entry Fee: <span>FREE</span></h1>
                  <h1>Players: <span>Single Player</span> </h1>
                </div>
              </div>
            </div>
          ))
            : <h1 style={{ color: 'red' }}>no game list</h1>
        }


      </div>


      <div className="overflow-hidden space position-relative z-index-common">
        <div className="gr-bg1 overlay"></div>
        <div className="container">
          <div className="title-area text-center"><span className="sub-title style2"># Welcome to The eSports & Gaming
            Site</span>
            <h2 className="sec-title text-white text-5xl font-bold">Forging Legends in the Gaming Universe</h2>
          </div>
          <div className="row">
            <div className="col-xl-7 mb-50 mb-xl-0">
              <div className="img-box2">
                <div className="img1"><img src="/hero-1-2.png" alt="About" /></div>
              </div>
            </div>
            <div className="col-xl-5 about_left_box ">
              <div className="about_card_box flex ">
                <div class="about-feature">
                  <div class="about-feature-icon icon-masking"><span class="mask-icon"
                    data-mask-src="assets/img/icon/about_feature_2_2.svg"></span> <img
                      src="/img/icon/about_feature_2_2.svg" alt="Icon" /></div>
                  <div class="about-feature-content">
                    <h3 class="about-feature-title">Gaming News</h3>
                    <p class="about-feature-text">Keep users informed about the gaming
                      industry with news articles.</p>
                  </div>
                </div>
              </div>
              <div className="about_card_box flex ">
                <div class="about-feature">
                  <div class="about-feature-icon icon-masking"><span class="mask-icon"
                    data-mask-src="assets/img/icon/about_feature_2_3.svg"></span> <img
                      src="/img/icon/about_feature_2_3.svg" alt="Icon" /></div>
                  <div class="about-feature-content">
                    <h3 class="about-feature-title">Great Tournament</h3>
                    <p class="about-feature-text">Display a calendar of upcoming tournament
                      with dates, times, and game.</p>
                  </div>
                </div>
              </div>
              <div className="about_card_box flex ">
                <div class="about-feature">
                  <div class="about-feature-icon icon-masking"><span class="mask-icon"
                    data-mask-src="assets/img/icon/about_feature_2_1.svg"></span> <img
                      src="/img/icon/about_feature_2_1.svg" alt="Icon" /></div>
                  <div class="about-feature-content">
                    <h3 class="about-feature-title">Live Streaming</h3>
                    <p class="about-feature-text">Integration with popular streaming
                      platforms for live coverage of esports.</p>
                  </div>
                </div>
              </div>
              <div className="about_card_box  ">
                <div class="about-feature">
                  <div class="about-feature-icon icon-masking"><span class="mask-icon"
                    data-mask-src="assets/img/icon/about_feature_2_3.svg"></span> <img
                      src="/img/icon/about_feature_2_3.svg" alt="Icon" /></div>
                  <div class="about-feature-content">
                    <h3 class="about-feature-title">Great Tournament</h3>
                    <p class="about-feature-text">Display a calendar of upcoming tournament
                      with dates, times, and game.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <TopPlayer />


    </div>
  )
}

export default page
