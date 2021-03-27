import {memo} from 'react'
import { css, jsx } from '@emotion/react'

const Dot = ({ active }) => {
  return (
    <span
      style={{
        padding: "10px",
  marginRight: "5px",
  cursor: "pointer",
  borderRadius: "50%",
  background: `${ active ? 'black' : 'white' }`,
        }}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "25px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}


export default Dots