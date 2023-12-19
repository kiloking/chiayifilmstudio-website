import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 檢查頁面滾動位置，當滾動超過某個閾值時顯示按鈕
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滾動效果
    });
  };
  return (
    <div className={` fixed bottom-5 right-5 z-50 bg-blue-700  rounded-full text-white w-10 h-10 flex items-center justify-center transition-all duration-500 ${isVisible ? ' opacity-100' : ' opacity-0'}`}>
      <button onClick={scrollToTop}><FaAngleUp /></button>
    </div>
  )
}

export default ScrollToTopButton