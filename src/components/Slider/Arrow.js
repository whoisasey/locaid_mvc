/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/react'
import leftArrow from '../../assets/img/left-arrow.svg'
import rightArrow from '../../assets/img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        position: "absolute",
        top: "50%",
        // `${direction === 'right' ? 'right: 25px' : 'left: 25px'}`,
        height: "50px",
        width: "50px",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        cursor: "pointer",
        alignItems: "center",
        transition: "transform ease-in 0.1s",
      }}
    >
      {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </div>
  )
}

export default memo(Arrow)

        // &:hover {
        //   transform: scale(1.1);
        // }
  
        // img {
        //   transform: translateX(${direction === 'left' ? '-2' : '2'}px);
  
        //   &:focus {
        //     outline: 0;
        //   }
        // }