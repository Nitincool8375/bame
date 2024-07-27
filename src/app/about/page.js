import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import TopPlayer from '@/components/TopPlayer'

const About = () => {
  return (
    <div className="about_main">
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
                <div className="img1"><img src="/hero-2-1.png" alt="About" /></div>
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







      <div className="th-comment-form mt-3">
        <div className="form-title">
          <h3 className="blog-inner-title mb-2"><FontAwesomeIcon icon={faReply} style={{ color: "#04b98c", }} /> Leave a Comment</h3>
          <p className="form-text">Your email address will not be published. Required fields are marked *
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 form-group style-border"><input type="text" placeholder="Your Name*"
            className="form-control" /> <i className="far fa-user"></i></div>
          <div className="col-md-6 form-group style-border"><input type="text" placeholder="Your Email*"
            className="form-control" /> <i className="far fa-envelope"></i></div>
          <div className="col-12 form-group style-border"><input type="text" placeholder="Website"
            className="form-control" /> <i className="far fa-globe"></i></div>
          <div className="col-12 form-group style-border"><textarea placeholder="Write a Comment*"
            className="form-control"></textarea> <i className="far fa-pencil"></i></div>
          <div className="col-12 form-group mb-0"><button className="th-btn">SEND MESSAGE <i
            className="far fa-arrow-right ms-2"></i></button></div>
        </div>
      </div>




      <TopPlayer />

    </div>
  )
}

export default About