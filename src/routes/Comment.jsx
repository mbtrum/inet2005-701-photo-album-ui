import { useParams, Link } from 'react-router-dom'

function Comment() {
    const { id } = useParams()

    return (
        <>
            <h1>Comment Page</h1>
            <p>Post a new comment for photo {id}.</p>
            <p>
                <Link to={`/details/${id}`}>Go back</Link>
            </p>      
        </>
    )
}

export default Comment