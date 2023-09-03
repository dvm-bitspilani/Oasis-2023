// "use client";

import React from "react";
import styles from "./hamburger.module.css"
import { HamContext } from "@/context/HamContextProvider";
import path from "../../public/static/images/path.svg"
import innercircle from "../../public/static/images/innercircle.png"
import logo from "../../public/static/images/oasis-logo-ham.png"
import glow from "../../public/static/images/glow.png"
import { useContext } from "react";
import Image from 'next/image'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/all";
import { delay } from "framer-motion";
gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(DrawSVGPlugin)

export default function Hamburger() {
    const { isHamOpen, setIsHamOpen } = useContext(HamContext);

    useEffect(() => {
        const element = document.querySelector('#glow');
        const path = document.querySelector('#path')
        const svg = document.querySelector('#path-svg')
        const one = document.querySelectorAll('.one')
        const two = document.querySelectorAll('.two')
        const three = document.querySelectorAll('.three')
        const four = document.querySelectorAll('.four')
        const five = document.querySelectorAll('.five')
        const inside = document.querySelectorAll('.ham-inside')

        var duration = 1
        var delay = 0.7

        if (isHamOpen) {
            gsap.set(element, {
                opacity: 0,
            })

            gsap.set(svg, {
                opacity: 0
            })

            gsap.to(svg, {
                opacity: 1,
                duration: 1,
                delay: 0.5
            })

            gsap.set(inside, {
                opacity: 0
            })

            gsap.to(inside, {
                opacity: 1,
                duration: 1,
                delay: 0.5
            })
            gsap.to(inside[1], {
                rotation: 360,
                duration: 2.5,
                ease: "power4.out",
                // repeat: 1,
                // transformOrigin: [0.5, 0.5],
            })

            gsap.set(one, {
                opacity: 0,
            })

            gsap.set(two, {
                opacity: 0,
            })

            gsap.set(three, {
                opacity: 0,
            })

            gsap.set(four, {
                opacity: 0,
            })

            gsap.set(five, {
                opacity: 0
            })

            gsap.to(one, {
                opacity: 1,
                duration: duration,
                delay: delay
            })
            gsap.to(two, {
                opacity: 1,
                duration: duration,
                delay: delay + 0.1,
            })
            gsap.to(three, {
                opacity: 1,
                duration: duration,
                delay: delay + 0.25,
            })
            gsap.to(four, {
                opacity: 1,
                duration: duration,
                delay: delay + 0.45,
            })

            gsap.to(five, {
                opacity: 1,
                duration: duration,
                delay: delay + 0.7
            })

            gsap.to(element, {
                opacity: 1,
                delay: 0,
                duration: 1,
            })

            gsap.to(element, {
                opacity: 0,
                delay: 1.3,
                duration: 1,
            })

            gsap.to(element, {
                duration: 1.5,
                repeat: 0,
                delay: 0,
                ease: CustomEase.create(
                    'custom',
                    'M0,0 C0.065,0 0.332,-0.042 0.514,0.184 0.611,0.305 0.634,0.686 0.708,0.874 0.757,1.001 0.98,0.997 0.989,0.999 0.993,0.999 0.996,1 1,1 '
                ),
                motionPath: {
                    path: path,
                    align: path,
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0,
                },
            })

        } else {
            gsap.killTweensOf(element);
            element.style.opacity = 0;
        }
    }, [isHamOpen]);


    return (
        <>
            <div className={styles.page}>
                {/* <div className={styles.container}> */}
                <div className={styles.background}>
                    <div className={styles.glowbox}>
                        <Image src={glow} id="glow" alt=""></Image>
                    </div>
                    <div className={`${styles.innercircle} ham-inside`}>
                        <Image src={innercircle} alt=""></Image>
                    </div>
                    <div className={`${styles.logo} ham-inside`}>
                        <Image id="logo" src={logo} alt=""></Image>
                    </div>
                    <div className={styles.outerpath}>
                        {/* <Image src={path} id="path"></Image> */}
                        <svg id="path-svg" viewBox="0 0 1044 816" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* <path id="base" opacity="0.7" d="M888 417.5C888 622.398 721.898 788.5 517 788.5C312.102 788.5 146 622.398 146 417.5C146 212.602 312.102 46.5 517 46.5C738 46.5 778.5 193 857.5 141.5C936.5 90 1029.5 29 1029.5 29" stroke="#F0F0F0" strokeWidth="0.75" strokeDasharray="5 5" /> */}
                            <path id="path" opacity="0.7" d="M888 417.5C888 622.398 721.898 788.5 517 788.5C312.102 788.5 146 622.398 146 417.5C146 212.602 312.102 46.5 517 46.5C738 46.5 778.5 193 857.5 141.5C936.5 90 1029.5 29 1029.5 29" stroke="#F0F0F0" strokeWidth="0.75" strokeDasharray="5 5" />
                        </svg>
                    </div>
                    <div className={styles.circle}>
                        <div className={`${styles.item} one`}>
                            <div className={`${styles.number} ${styles.one}`} >
                                <span className={styles.numbox}><div className={styles.num}>1</div></span>
                                <span className={styles.txt}>SPONSORS</span>
                            </div>
                        </div>
                        <div className={`${styles.item} two`}>
                            <div className={`${styles.number} ${styles.two}`} >
                                <span className={styles.numbox}><div className={styles.num}>2</div></span>
                                <span className={styles.txt2}>ECLIPSE</span>
                            </div>
                        </div>
                        <div className={`${styles.item} three`}>
                            <div className={`${styles.number} ${styles.three}`} >
                            <span className={styles.numbox}><div className={styles.num}>3</div></span>
                                <span className={styles.txt2}>WALLMAG</span>
                            </div>
                        </div>
                        <div className={`${styles.item} four`}>
                            <div className={`${styles.number} ${styles.four}`} >
                                <span className={styles.numbox}><div className={styles.num}>4</div></span>
                                <span className={styles.txt}>MEDIA PARTNERS</span>
                            </div>
                        </div>
                        <div className={`${styles.item} five`}>
                            <div className={`${styles.number} ${styles.five}`} >
                            <span className={styles.numbox}><div className={styles.num}>5</div></span>
                            <span className={styles.txt}>DEVELOPERS</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className={styles.circle2}>
                    <div className={`${styles.tag} one`}>
                        <div className={styles.text}>SPONSORS</div>
                    </div>
                    <div className={`${styles.tag} two`}>
                        <div className={styles.text} >ECLIPSE</div>
                    </div>
                    <div className={`${styles.tag} three`}>
                        <div className={styles.text} >WALLMAG</div>
                    </div>
                    <div className={`${styles.tag} four`}>
                        <div className={styles.text} >MEDIA PARTNERS</div>
                    </div>
                    <div className={`${styles.tag} five`}>
                        <div className={styles.text} >DEVELOPERS</div>
                    </div>
                </div> */}
                </div>
                {/* </div> */}
            </div>
        </>
    )
}