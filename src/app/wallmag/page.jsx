"use client"

import React , {useRef} from "react";
import styles from "./page.module.css"
import { useRouter } from "next/navigation";

const Page = () => {

    const router = useRouter();

    const skullRef = useRef(null);
    const contentRef = useRef(null);

    const handleTrackSnap = (e) => {
        const formContainerElem = contentRef.current;
        const scrollBarContainer = document.querySelector(
            `.${styles.scrollBarContainer}`
        );

        const percentage =
            ((e.clientY - scrollBarContainer.offsetTop) /
            scrollBarContainer.clientHeight) *
            100;
        const maxScrollTopValue =
            formContainerElem.scrollHeight - formContainerElem.clientHeight;

        formContainerElem.scrollTo({
            top: (percentage / 100) * maxScrollTopValue,
            behavior: "smooth",
        });
    };

    const handleSkullMouseDown = (e) => {
        console.log("mousedown");
        e.preventDefault();

        document.addEventListener("mousemove", handleSkullDragMove);
        document.addEventListener("touchmove", handleSkullDragMove);

        document.addEventListener("mouseup", handleSkullDragEnd);
        document.addEventListener("touchend", handleSkullDragEnd);
    };

    const handleSkullDragMove = (e) => {
        // const skullElem = skullRef.current;
        const formContainerElem = contentRef.current;
        const scrollBarContainer = document.querySelector(
          `.${styles.scrollBarContainer}`
        );
    
        const maxScrollTopValue =
          formContainerElem.scrollHeight - formContainerElem.clientHeight;
    
        const clientY = e.clientY || e.touches[0].clientY;
    
        const percentage =
          ((clientY - scrollBarContainer.offsetTop) /
            scrollBarContainer.clientHeight) *
          100;
    
        formContainerElem.scrollTop = (percentage / 100) * maxScrollTopValue;
    };
    
    const handleSkullDragEnd = (e) => {
        document.removeEventListener("mousemove", handleSkullDragMove);
        document.removeEventListener("mouseup", handleSkullDragEnd);
        document.removeEventListener("touchmove", handleSkullDragMove);
        document.removeEventListener("touchend", handleSkullDragEnd);
    };


    // replace this with api later on 
    const cards = [
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
        {image: "/static/images/temp_wallmag.png" , name:"Shivang Rai" , dept:"Department of Visual Media" , desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat praesentium nihil placeat culpa, reiciendis dolorem qui cupiditate, sint, laborum quae expedita quis fuga deleniti assumenda voluptas inventore incidunt consequatu"},
    ];







    return (
        <div className={styles["wallmagPage"]}>
            <img src="/static/images/web1.svg" className={styles.web1} alt="" />
            <img src="/static/images/web2.png" className={styles.web2} alt="" />
            <img src="/static/images/cross.svg" onClick={()=>router.back()} alt="Close" className={styles.cross}  />
            <h1 className={styles.wallmagHeading} >WALLMAG</h1>

            <div className={styles["wallmagContent"]}>
                <div className={styles.scrollBarContainer} onClick={handleTrackSnap}>
                    <div className={styles.scrollBar}></div>
                    <img draggable={false} onMouseDown={handleSkullMouseDown} onTouchStart={handleSkullMouseDown} id="skull" src="/static/images/skull.svg" alt="skull" ref={skullRef}
                    />
                </div>
                <div className={styles.wallmagContentContainer} ref={contentRef}>
                    <div className={styles.cardsContainer}>
                        {cards.map((card, index) => (
                            <div className={styles.card} key={index}>
                                <div className={styles.cardImageContainer}>
                                    <img src={card.image} alt="" className={styles.cardImage} />
                                    <div className={styles.cardHeading}>
                                        <h1>{card.name}</h1>
                                        <h2>{card.dept}</h2>
                                    </div>
                                </div>
                                <div className={styles.cardDesc}>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default page;