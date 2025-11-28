import { useParams, Link } from 'react-router-dom'

function Details() {
    const { id } = useParams()
    
    return (
        <>
            <p><Link to="/">Go home</Link></p>
            <h1>Details Page</h1>
            <p>Display details for photo {id}.</p>

            <h2>Comments</h2>
            <p>Comming soon...</p>
            <p>
                <Link to={`/comment/${id}`}>Post Comment</Link>
            </p>
        </>
    )
}

export default Details