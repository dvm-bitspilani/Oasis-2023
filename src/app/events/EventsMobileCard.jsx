"use client"

import React, { useEffect, useState } from "react";
import StreetDance from "../../../public/static/images/SampleEvent.png"
import Image from "next/image";
import * as styles from "./eventsMobile2.module.css"
import Forward from "../../../public/static/images/forwardArrow.svg"
import Backward from "../../../public/static/images/backArrow.svg"

export default function EventsMobile2({width, image, name, desc, key, onForward, onBackward }) {
    // const [width, setWidth] = useState(0)

    // useEffect(() => {
    //     const updateWidth = () => {
    //         setWidth(window.innerWidth);
    //     };
    //     window.addEventListener("resize", updateWidth);
    //     updateWidth();
    //     return () => {
    //         window.removeEventListener("resize", updateWidth);
    //     };
    // }, []);

    const handleForward = () => {
        // console.log("forward")
        onForward()
    }
    const handleBackward = () => {
        // console.log("back")
        onBackward()
    }

    return (
        <>
            <div className={styles.cardContainer} key={key} style={{ width: width }}>
                <div className={styles.content}>
                    <div className={styles.image}
                    // style={{ backgroundImage: `url(${Sample})`}}
                    >
                        <Image src={StreetDance} alt="img not found"
                        />
                    </div>
                    <h1 className={styles.name} style={{ fontFamily: 'KoPub' }}>STREET DANCE</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                </div>

                <div className={styles.navigation}>
                    <Image src={Backward} onClick={handleBackward} />
                    <Image src={Forward} onClick={handleForward} />
                </div>
            </div>
        </>
    )
}