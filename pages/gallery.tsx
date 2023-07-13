import { useEffect } from "react"

const Gallery = () => {
  useEffect(() => {
    const productGallery = cloudinary.galleryWidget({
      container: "#image-gallery",
      cloudName: "drgp9svrb",
      mediaAssets: [{ tag: "gallery", 
        transformation: { background: "transparent" }
      }],
      carouselLocation: "bottom"
    })
    productGallery.render()
  }, [])
  return (
    <div className="gallery">
      <div className="m-auto gallery-container">
        <div id="image-gallery"></div>
      </div>
    </div>
  )
}

export default Gallery