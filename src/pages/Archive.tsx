import { ReactLenis } from 'lenis/react'

export default function Archive() {
  return (
    <>
      <ReactLenis root />
      <div className="container">
        <div className="archive">
          <img src="/img_01.jpg" alt="" />
          <img src="/img_02.jpg" alt="" />
          <img src="/img_03.jpg" alt="" />
          <img src="/img_04.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
