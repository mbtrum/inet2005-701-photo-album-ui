import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Details() {
    const { id } = useParams()
    
    const [photo, setPhoto] = useState(null) // single photo
    
    // ../api/photos/1
    const apiUrl = import.meta.env.VITE_API_URL + `/${id}`
    console.log('Fetching photo details from:', apiUrl)

    useEffect(() => { 
        const getPhoto = async () => {
            const response = await fetch(apiUrl) 
            const result = await response.json() 

            if(response.ok) { 
                setPhoto(result)
            }
        }

        getPhoto()
    }, []) 

    return (
        <>
            <p><Link to="/">Go home</Link></p>
            <h1>Details Page</h1>
            
            { photo && (
                <>
                    <img src={photo.Filename} alt={photo.PhotoTitle} className="w-75"/>
                    <h2>{photo.PhotoTitle}</h2>
                    <p>{photo.Description}</p>
                </>
            )}

            <h2>Comments</h2>
            <p>Comming soon...</p>
            <p>
                <Link to={`/comment/${id}`}>Post Comment</Link>
            </p>
        </>
    )
}

export default Details