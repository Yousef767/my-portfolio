import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel ,Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

class Portfolio extends Component {
  render() {
    const data = [
      {
        title: "E-commerce Store",
        link: "https://e-store-ya.netlify.app",
      },
      {
        title: "Instagram Clone",
        link: "https://insta-clone-ya.netlify.app",
      },
      {
        title: "Goal Makers",
        link: "https://goal-makers.netlify.app",
      },
      {
        title: "Ecommerce Store",
        link: "https://megastore-yaa.netlify.app",
      },
      {
        title: "Coffee Shop",
        link: "https://coffee-ya.netlify.app",
      },
      {
        title: "Software Developers",
        link: "https://softwaredevs-ya.netlify.app",
      },
      {
        title: "Fashion Store",
        link: "https://estore-ya.netlify.app",
      },
      {
        title: "To Do List",
        link: "https://todolist-ya.netlify.app",
      },
    ];
    
    return (
      <section className="portfolio">
        <div className="section">
          <h1>MY LATEST PROJECTS</h1>
          <span className="mp">MY 2023 PORTFOLIO</span>
          <div className="reach">
            <span>Take A Look</span>
            <span className="c">
              <span>
                <a href="#sw">
                  <i className="fa-regular fa-down-long"></i>
                </a>
              </span>
            </span>
          </div>
          <span className="bubble top"></span>
          <span className="bubble bottom"></span>
        </div>
        <Swiper
          direction={"vertical"}
          modules={[Mousewheel,Pagination]}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          slidesPerView={1}
          className="mySwiper"
          id="sw"
        >
          {data.map((e, i) => (
            <SwiperSlide key={i}>
              <div className={`project p${i + 1}`}>
                <div className="content">
                  <div className="project-title">{e.title} </div>
                  <div className="visit">
                    <div className="cir">
                      <span>
                        <a href={e.link} target="_blank" rel="noreferrer">
                          VISIT WEBSITE
                          <i className="fa-regular fa-right-long"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}

export default Portfolio;
