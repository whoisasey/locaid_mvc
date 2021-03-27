import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 250){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 60, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;