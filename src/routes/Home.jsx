import { useState, useEffect } from 'react'
import PhotoCard from '../ui/PhotoCard.jsx'

function Home() {
  const [photos, setPhotos] = useState([]) // empty collection of photos

  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => { 
    const getPhotos = async () => {
        const response = await fetch(apiUrl) 
        const result = await response.json() 

        if(response.ok) { 
            setPhotos(result)
        }
    }

    getPhotos()
  }, [])  

  return (
    <>
      <h1>Photo Album</h1>

      <div className="masonry-grid">
      {
        photos.length > 0 &&
          photos.map(photo => (
            <div key={photo.PhotoId} className="masonry-grid-item">
                <PhotoCard         
                    PhotoId={photo.PhotoId}
                    PhotoTitle={photo.PhotoTitle}
                    Filename={photo.Filename}
                />
            </div>
          ))
      }
      </div>
    </>
  )
}

export default Home