import React, { memo } from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content, width }) => {
  console.log(content)
  // console.log(width)
  return (
    <div
      style={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  )
}

export default memo(Slide)