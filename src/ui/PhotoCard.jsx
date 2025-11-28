import { Link } from 'react-router-dom'

function PhotoCard(props) {
    return (
        <>
            <Link to={`/details/${props.PhotoId}`}>
                <img src={props.Filename} alt={props.PhotoTitle} />
                <div className="label">{props.PhotoTitle}</div>
            </Link>
        </>
    )
}

export default PhotoCard