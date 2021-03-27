import React, { memo } from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content, width }) => {
  console.log(content)
  // console.log(width)
  return (
    <div
      style={{
        height: "100%",
        width: `${width}px`,
        backgroundImage: `url('${content}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  )
}

export default memo(Slide)