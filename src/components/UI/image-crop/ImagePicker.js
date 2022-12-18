import React, { useState, useRef } from 'react'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import { canvasPreview, TO_RADIANS } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'

import 'react-image-crop/dist/ReactCrop.css'
import { Button } from 'reactstrap'
import CustomButton from '../CustomButton'

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
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

export default function ImagePicker(props) {
  const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef(null)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState(8 / 12)
  const [imageOutput, setImageOutput] = useState()
  const [saved, setSaved] = useState(false)
  //   const [src, setSrc] = useState(null)

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      //   setSrc(URL.createObjectURL(e.target.files[0]))
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  //   const cropImageNow = () => {
  //     const canvas = document.createElement('canvas')
  //     const scaleX = imgRef.current.naturalWidth / imgRef.current.width
  //     const scaleY = imgRef.current.naturalHeight / imgRef.current.height
  //     canvas.width = crop.width
  //     canvas.height = crop.height
  //     const ctx = canvas.getContext('2d')

  //     const pixelRatio = window.devicePixelRatio
  //     canvas.width = crop.width * pixelRatio
  //     canvas.height = crop.height * pixelRatio
  //     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  //     ctx.imageSmoothingQuality = 'high'

  //     ctx.drawImage(
  //       imgRef.current,
  //       crop.x * scaleX,
  //       crop.y * scaleY,
  //       crop.width * scaleX,
  //       crop.height * scaleY,
  //       0,
  //       0,
  //       crop.width,
  //       crop.height,
  //     )

  //     // Converting to base64
  //     const base64Image = canvas.toDataURL('image/jpeg')
  //     setImageOutput(base64Image)
  //   }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
        // console.log(imageVal)
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  //   function handleToggleAspectClick() {
  //     if (aspect) {
  //       setAspect(undefined)
  //     } else if (imgRef.current) {
  //       const { width, height } = imgRef.current
  //       setAspect(16 / 9)
  //       setCrop(centerAspectCrop(width, height, 16 / 9))
  //     }
  //   }

  function getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement('canvas')
    // canvas.width = pixelCrop.width
    // canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio
    // const pixelRatio = 1

    canvas.width = Math.floor(pixelCrop.width * scaleX * pixelRatio)
    canvas.height = Math.floor(pixelCrop.height * scaleY * pixelRatio)

    ctx.scale(pixelRatio, pixelRatio)
    ctx.imageSmoothingQuality = 'high'

    const cropX = pixelCrop.x * scaleX
    const cropY = pixelCrop.y * scaleY

    const rotateRads = rotate * TO_RADIANS
    const centerX = image.naturalWidth / 2
    const centerY = image.naturalHeight / 2

    ctx.save()

    // 5) Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY)
    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY)
    // 3) Rotate around the origin
    ctx.rotate(rotateRads)
    // 2) Scale the image
    ctx.scale(scale, scale)
    // 1) Move the center of the image to the origin (0,0)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
    )

    ctx.restore()

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob((file) => {
        file.name = fileName
        resolve(file)
      }, 'image/jpeg')
    })
  }

  return (
    <div className="App">
      <div className="Crop-Controls">
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="form-control mb-2"
        />
        {/* <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div>
        <div>
          <button onClick={handleToggleAspectClick}>
            Toggle aspect {aspect ? 'off' : 'on'}
          </button>
        </div> */}
      </div>
      {!!imgSrc && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => {
            setCompletedCrop(c)
            // console.log(c)
            // console.log(crop)
          }}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            className="img-cropped"
            src={imgSrc}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      <CustomButton
        onClick={() =>{
          let timestamp = Date.now()
          getCroppedImg(imgRef.current, completedCrop, `cover_photo${timestamp}.jpg`).then(
            (resp) => {
              //   console.log(resp)
              // const blobUrl = URL.createObjectURL(resp)
              const file = new File([resp], `cover_photo${timestamp}.jpg`)
              //   console.log(blobUrl)
              props.onSave(file)
              setSaved(true)
            },
          )
        }}
      >
        Save
      </CustomButton>
      {/* <div>
        {saved && !!completedCrop && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        )}
      </div> */}

      {/* {imageOutput && <img className="img-fluid" src={imageOutput} />} */}
    </div>
  )
}
