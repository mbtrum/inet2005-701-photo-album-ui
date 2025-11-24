import { useState, useEffect } from 'react'
import PhotoCard from './ui/PhotoCard.jsx'

function Home() {
  const [photos, setPhotos] = useState([]) // empty collection of photos

  useEffect(() => { 
    const getPhotos = async () => { 
        const response = await fetch("http://localhost:3000/api/photos") 
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

      {
        photos.length > 0 &&
          photos.map(photo => (
            <div key={photo.PhotoId}>
                <PhotoCard              
                    PhotoTitle={photo.PhotoTitle}
                    Filename={photo.Filename}
                />
            </div>
          ))
      }
    </>
  )
}

export default Home