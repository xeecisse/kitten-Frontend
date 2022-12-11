// This is to demonstate how to make and center a % aspect crop

import { centerCrop, makeAspectCrop } from 'react-image-crop'

// which is a bit trickier so we use some helper functions.
export function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}
