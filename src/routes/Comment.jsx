import { useParams, Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'

function Comment() {
    const { id } = useParams()

    const { register, handleSubmit, formState: { errors } } = useForm()

    // ../api/photos
    const apiUrl = import.meta.env.VITE_API_URL

    // inputs: author, body, photoid
    // REMEMBER: register inputs are case-sentitive!

    const onSubmit = async (data) => {
        console.log(data);
        const response = await fetch(`${apiUrl}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            alert('Comment added successfully!')
        }
        else {
            alert('Failed to add comment.')
        }
    }

    return (
        <>
            <h1>Add a Comment</h1>          

            <form onSubmit={ handleSubmit(onSubmit) } className="w-50 mb-3">
                <input type="hidden" id="photoid" name="photoid" value={id} 
                    {...register('PhotoId')} />
                
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author:</label><br />
                    <input type="text" id="author" name="author" className="form-control" 
                        {...register('Author', { required: true })} />
                    {errors.Author && <span className="text-danger">Author is required</span>}

                </div>                
                
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Comment:</label><br />
                    <textarea id="body" name="body" rows="4" cols="50" className="form-control"
                        {...register('Body', { required: true })}></textarea>
                    {errors.Body && <span className="text-danger">Comment is required</span>}
                </div>
                
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>

            <p>
                <Link to={`/details/${id}`}>Go back</Link>
            </p>      
        </>
    )
}

export default Comment