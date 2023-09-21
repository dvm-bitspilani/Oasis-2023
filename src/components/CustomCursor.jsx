import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css'; // You can use CSS modules or any styling approach you prefer
import penImage from "../../public/static/images/cursor.png"
import Image from 'next/image'; 


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over an element with the "customHover" class name
      const hoveredElements = document.querySelectorAll('.customHover');
      const isHovered = Array.from(hoveredElements).some((element) =>
        element.contains(e.target)
      );
      setIsHovered(isHovered);
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={`${styles.customCursor} ${isHovered ? styles.hovered : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <Image src={penImage}/>
    </div>
  );
};

export default CustomCursor;