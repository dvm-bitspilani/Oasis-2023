"use client"

import * as styles from "./epc.module.css"

import { useState } from "react"

import Link from "next/link"

// import PressClubCarousel from "@/components/PressClubCarousel"
import CustomCursor from "@/components/CustomCursor"

import Image from "next/image"
import Forward from "../../../public/static/images/forwardArrow.svg"
import Backward from "../../../public/static/images/backArrow.svg"
// import swiper and swiperslide
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper core and required modules
import { Navigation, Mousewheel } from "swiper/modules"

import PDFDocument from "@/components/PDFDocument"

// Importing PDFs
import issue1 from "../../../public/static/pdf/OEP ISSUE 1.pdf"
import issue2 from "../../../public/static/pdf/OEP ISSUE 2.pdf"
import issue3 from "../../../public/static/pdf/OEP ISSUE 3.pdf"

export default function EPC() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {isLoading && (
        <div className="loaderContainer">
          {/* <MyVideoLoader/> */}
          <video
            src={require("../../../public/static/images/loadervideo.mp4")} // Update with the correct path
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            width="100%"
          />
        </div>
      )}
      <main className={styles.pageWrapper}>
        <CustomCursor />
        {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta> */}
        <header className={styles.heading}>
          <Link href="/" className={styles.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M31 3L3 31M3 3L31 31"
                stroke="#5DB3F1"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className={styles.title}>
            <h1>Articles</h1>
          </div>
        </header>
        <div className={styles.carouselWrapper}>
          <Swiper
            className={styles.carousel}
            // pagination={{ clickable: true }}
            // navigation={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            spaceBetween={75}
            //   slidesPerView={1.1}
            centeredSlides={true}
            //   loop={true}
            mousewheel={{
              forceToAxis: true,
              // invert: true,
              sensitivity: 0.5,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1124: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            allowTouchMove={false}
            modules={[Navigation, Mousewheel]}
          >
            <SwiperSlide className={styles.slide} >
              <PDFDocument setIsLoading={setIsLoading} pdfFile={issue1}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <PDFDocument pdfFile={issue2}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <PDFDocument pdfFile={issue3}/>
            </SwiperSlide>
          </Swiper>
          <div className={styles.carouselController}>
            <button
              className={styles.leftArrow}
              onClick={() => {
                const swiper = document.querySelector(".swiper").swiper
                swiper.slidePrev()
              }}
            >
              <Image src={Backward} alt="" />
            </button>
            <div className={styles.articleAuthor}>
              <p>English Press Club</p>
            </div>
            <button
              className={styles.rightArrow}
              onClick={() => {
                const swiper = document.querySelector(".swiper").swiper
                swiper.slideNext()
              }}
            >
              <Image src={Forward} alt="" />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
