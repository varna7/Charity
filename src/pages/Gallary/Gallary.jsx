import React from 'react'
import PhotoAlbum from "react-photo-album";
import church1 from "../../assets/church1.jpg"
import church from "../../assets/church.jpg"
import palliative1 from "../../assets/palliative1.jpg"
import palliative2 from "../../assets/palliative2.jpg"

import about from "../../assets/about.jpg"
import church2 from "../../assets/church2.jpg"
import footer from "../../assets/footer.jpg"




const Gallary = () => {

    const photos = [
        { src: church, width: 400, height: 300 },
        { src: church1, width: 400, height: 300 },
        { src: palliative1, width: 400, height: 300 },
        { src: palliative2, width: 400, height: 300 },
        { src: church2, width: 400, height: 300 },
        { src: footer, width: 400, height: 300 },
        { src: about, width: 400, height: 300 },


      ];

  return (
    <div className='d-flex flex-column gap-2 gap-md-5'>
        <div className="head">
            <h2>Photo Gallary</h2>
        </div>
        <div className="gallary-main p-3 p-md-5">
        <PhotoAlbum layout="rows" photos={photos} />
        </div>
        
    </div>
  )
}

export default Gallary