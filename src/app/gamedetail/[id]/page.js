'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCoins, faAddressCard, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';


const singleGame = () => {
  const params = useParams();
  console.log(params)
  const [data, setData] = useState(null);
  const [stats, setstats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/game/Getonegame/${params.id}`);
      const jsonData = await response.json();
      setData(jsonData);
      const statsresponse = await fetch(`http://localhost:5000/game/Getallstats/${params.id}`)
      console.log(jsonData.Game.Gamename, "mygame");
      const jsonstats = await statsresponse.json();
      setstats(jsonstats)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  let [visit, setVisit] = useState('about')

  const handleViewChange = (view) => {
    console.log(view);
    setVisit(view);
  };

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      {
        loading ? <h1>Loading..</h1> :

          <div className='game_det_box '>
            <div className='game_img flex justify-around pt-10 pb-10 flex-wrap'>
              <div className='img_box m-4'>
                <img src={data.Game.image} />
              </div>
              <div className='game_text text-center  m-4'>
                <div className='flex justify-center'>
                  <img src="/about_feature_1.svg" alt="img" />
                </div>
                <h1 className='mt-4 mb-4'>{data.Game.Gamename}</h1>
                <p>{data.Game.About.Text}</p>
                <div className=' text flex justify-between pl-2 pr-3 mt-3 '>
                  <p className='font-bold  uppercase' > <FontAwesomeIcon icon={faGamepad} /> Multi player</p>
                  <p className='font-bold uppercase '> <FontAwesomeIcon icon={faCoins} />{data.Game.Entryfee}</p>
                </div>
                <div className='play_btn '>
                  <a href="about.html" className="th-btn">
                    PLAY <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>

              </div>
            </div>

            <div className="col-lg-auto">
              <div
                className="sec-btn custom-anim-right wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"

              >
                <div className="tournament-filter-btn filter-menu filter-menu-active" >
                  <button data-filter="*" className="tab-btn active" type="button" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                    About
                  </button>
                  <button data-filter=".cat1" className="tab-btn active" type="button" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
                    {/* SCREENSHOT */}
                    Screenshot
                  </button>
                  <button data-filter=".cat1" className="tab-btn active" type="button" onClick={() => document.getElementById('stack').scrollIntoView({ behavior: 'smooth' })}>
                    Stats
                  </button>
                </div>
              </div>
            </div>

            <div className='viste_page'>

              <div className='about_top flex justify-between pl-10 pr-10  flex-wrap' id='about'>
                <h1> <FontAwesomeIcon icon={faAddressCard} style={{ color: "#c25660", }} />{data.Game.Gamename}</h1>
                <p> <FontAwesomeIcon icon={faCoins} style={{ color: "#c25660", }} /> Entry Fee: <span>{data.Game.Entryfee}</span></p>
              </div>
              <div className='about_text mt-20 pl-5 pr-5'>
                {/* <p>Emerging trends in the esports industry include the growth of mobile
              esports, the integration of virtual reality in gaming experiences, and
              the increasing involvement of traditional sports organizations in
              esports partnerships and investments. Balancing screen time involves
              taking regular breaks, practicing the 20-20-20 rule
              (looking at something 20 feet away for 20 seconds every 20 minutes),
              and incorporating physical activity into daily routines. Establishing
              a balance between gaming and other activities is crucial for overall
              well-being.</p> */}
                <p>{data.Game.About.Text}</p>
              </div>

              <div className='about_bottom pl-5 '>
                {/* {data.Game.About.Subpoints.map(value=>{
              
            })} */}
                <h1> <FontAwesomeIcon icon={faCircleRight} style={{ color: "#c25660", }} />{data.Game.About.Subpoints[0].Subtext1}</h1>
                <h1> <FontAwesomeIcon icon={faCircleRight} style={{ color: "#c25660", }} />{data.Game.About.Subpoints[0].Subtext2}</h1>
                <h1> <FontAwesomeIcon icon={faCircleRight} style={{ color: "#c25660", }} />{data.Game.About.Subpoints[0].Subtext3}</h1>
                <h1><FontAwesomeIcon icon={faCircleRight} style={{ color: "#c25660", }} />{data.Game.About.Subpoints[0].Subtext4}</h1>
                {/* <h1> <FontAwesomeIcon icon={faCircleRight} style={{ color: "#c25660", }} /> Free rewards every day</h1> */}
              </div>

              <h1 className='text-center text-5xl font-bold text-white' > Screenshot</h1>


              <div id="gallery" class="container-fluid" >

                <LightGallery


                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}

                >

                  {data.Game.Screenshots.map(value => {
                    console.log(value);
                    return <a data-lg-size="1906-1390"
                      className="gallery-item"
                      data-src='/1-2.png'>
                      <img alt="img1" src={value} className="img-responsive" />
                    </a>
                  })}


                  {/* <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='/hero-bg1-1.png'>
                <img alt="img2" src="/hero-bg1-1.png" className="img-responsive" />
              </a>
              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/pubg-lite-running-player-c22oj1fv1ysm3d8a.webp'>
                <img alt='img3' src="https://wallpapers.com/images/high/pubg-lite-running-player-c22oj1fv1ysm3d8a.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/pubg-pictures-nhef937ctctm4rbm.webp'>
                <img alt='img4' src="https://wallpapers.com/images/high/pubg-pictures-nhef937ctctm4rbm.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/victor-being-shot-at-pubg-1366x768-2fide01ouqhbklsx.webpt'>
                <img alt='img5' src="https://wallpapers.com/images/high/victor-being-shot-at-pubg-1366x768-2fide01ouqhbklsx.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/pubg-2020-camouflaged-player-yxkflamv92nl8azr.webp'>
                <img src="https://wallpapers.com/images/high/pubg-2020-camouflaged-player-yxkflamv92nl8azr.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/pubg-full-screen-battlefield-soldier-mqxjnutrlf7s890b.webp'>
                <img src="https://wallpapers.com/images/high/pubg-full-screen-battlefield-soldier-mqxjnutrlf7s890b.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/pubg-lite-woman-gamer-hujh5qcp5amtzdob.webp'>
                <img src="https://wallpapers.com/images/high/pubg-lite-woman-gamer-hujh5qcp5amtzdob.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/victor-in-moving-car-pubg-mobile-lite-mmh70swpu88yol9p.webp'>
                <img src="https://wallpapers.com/images/high/victor-in-moving-car-pubg-mobile-lite-mmh70swpu88yol9p.webp" class="img-responsive" />
              </a>

              <a data-lg-size="1406-1390"
                className="gallery-item"
                data-src='https://wallpapers.com/images/high/pubg-helmet-1080p-gaming-5ocmv35mqe7t1m50.webp'>
                <img src="https://wallpapers.com/images/high/pubg-helmet-1080p-gaming-5ocmv35mqe7t1m50.webp" class="img-responsive" />
              </a> */}



                </LightGallery>
              </div>






            </div>

            <div
              className="point-table-area-1 space overflow-hidden"
              id='stack'
              // data-bg-src="/img/bg/tournament-table-sec1-bg.png"
              style={{ backgroundImage: `url('/img/bg/video-sec2-bg-shape.png')` }}
            >
              <div className="container">
                <div
                  className="title-area text-center custom-anim-top wow animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <span className="sub-title style2"># Point Table</span>
                  <h2 className="sec-title">
                    Game On, Power Up, Win Big <span className="text-theme">!</span>
                  </h2>
                </div>
                <div className="table-responsive">
                  <table className="table tournament-table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player Image</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Matches</th>
                        <th scope="col">Total PTS.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.Gamestats.map((value, index) => {
                        console.log(value.Playername);
                        // })}
                        return (<tr key={index}>
                          <th scope="row">{index}</th>
                          <td>
                            <a href="tournament.html"
                            ><img src={value.image} alt="img" /></a>
                          </td>
                          <td>{value.Playername}</td>
                          <td>{value.Totalmatches}</td>

                          <td>{value.Totalscore}</td>
                        </tr>
                        )
                      })}
                      {/* <tr>
                    <th scope="row">2</th>
                    <td>
                      <a href="tournament.html"
                      ><img src="/img/tournament/1-2.png" alt="img" /></a
                      >
                    </td>
                    <td>lion</td>
                    <td>1</td>

                    <td>45</td>
                  </tr> */}
                      {/* <tr>
                    <th scope="row">3</th>
                    <td>
                      <a href="tournament.html"
                      ><img src="/img/tournament/1-3.png" alt="img" /></a
                      >
                    </td>
                    <td>Rahul</td>
                    <td>1</td>

                    <td>45</td>
                  </tr> */}
                      {/* <tr>
                    <th scope="row">4</th>
                    <td>
                      <a href="tournament.html"
                      ><img
                          src="/img/tournament/1-4.png"
                          alt="img"
                        /></a
                      >
                    </td>
                    <td>yash</td>
                    <td>0</td>

                    <td>44</td>
                  </tr> */}
                      {/* <tr>
                    <th scope="row">5</th>
                    <td>
                      <a href="tournament.html"
                      ><img src="/img/tournament/1-5.png" alt="img" /></a
                      >
                    </td>
                    <td>subham</td>
                    <td>1</td>

                    <td>43</td>
                  </tr> */}
                      {/* <tr>
                    <th scope="row">6</th>
                    <td>
                      <a href="tournament.html"
                      ><img src="/img/tournament/1-6.png" alt="img" /></a
                      >
                    </td>
                    <td>ben</td>
                    <td>0</td>

                    <td>38</td>
                  </tr> */}
                      {/* <tr>
                    <th scope="row">7</th>
                    <td>
                      <a href="tournament.html"
                      ><img src="/img/tournament/1-7.png" alt="img" /></a
                      >
                    </td>
                    <td>Nitn</td>
                    <td>0</td>

                    <td>36</td>
                  </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>










          </div >
      }

    </>
  )
}

export default singleGame
