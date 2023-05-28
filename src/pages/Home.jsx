import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const handlePrevClick = () => {
    const swiper = document.querySelector(".swiper-container")?.swiper;
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    const swiper = document.querySelector(".swiper-container")?.swiper;
    if (swiper) {
      swiper.slideNext();
    }
  };

  useEffect(() => {
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Link to="/map">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url('${HOME_PATH}/img/main_banner_no.jpg')`,
                height: "600px",
              }}
            >
              <div className="absolute w-full h-full">
                <div className="flex justify-center items-center h-full flex-col">
                  <p className="mb-1 text-3xl md:text-4xl tracking-tight">
                    전국 1,000여 개 시장정보
                  </p>
                  <p className="mb-52 text-3xl md:text-4xl font-semibold tracking-tight">
                    시장275에서 만나보세요!
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "50%",
              backgroundImage: `url('${HOME_PATH}/img/main_banner_01.jpg')`,
              height: "600px",
            }}
          >
            <div
              className="absolute top-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed title_a"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center px-6 md:px-12">
                  <div className="text-white mb-5">
                    <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
                      광주
                    </p>
                    <p className="text-5xl md:text-6xl font-bold tracking-tight">
                      양동시장
                    </p>
                  </div>
                  <Link
                    to="/curation/yangdong"
                    className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase 
                    rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    큐레이션 바로가기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-navigation">
        <button
          className="swiper-button-prev main-btn-prev w-10"
          onClick={handlePrevClick}
        >
          <img src={`${HOME_PATH}/img/prev_arrow.png`} alt="Previous" />
        </button>

        <button
          className="swiper-button-next main-btn-next w-10"
          onClick={handleNextClick}
        >
          <img src={`${HOME_PATH}/img/next_arrow.png`} alt="Next" />
        </button>
      </div>
      {/* 큐레이션 미리보기 */}
      <div className="w-full mb-10">
        <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="border-b border-prigray-300 mt-10">
            <p className="text-2xl font-semibold mb-3 ml-3">월간 큐레이션</p>
          </div>
          <div className="mx-5">
            {/* 큐레이션 아이템 01 */}
            <Link to="/curation/gwangju">
              <div className="mt-8 text-white transition ">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover"
                  style={{
                    backgroundPosition: "50%",
                    backgroundImage: "url('/img/gwangju.jpg')",
                    height: "300px",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/25 hover:bg-black/50 transition"
                  >
                    <div className="flex justify-center items-center h-full">
                      <div className="text-center px-6 md:px-12">
                        <div className="title_a">
                          <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
                            6월의 시장
                          </p>
                          <p className="text-5xl md:text-6xl font-bold tracking-tight">
                            광주
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* 큐레이션 아이템 02 */}
            <div className="mt-10">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                  backgroundPosition: "50%",
                  backgroundImage: "url('/img/busan.jpg')",
                  height: "300px",
                }}
              >
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                >
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center text-white px-6 md:px-12">
                      <div className="title_a">
                        <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
                          7월의 시장
                        </p>
                        <p className="text-5xl md:text-6xl font-bold tracking-tight">
                          coming soon
                        </p>
                      </div>
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
};

export default Home;
