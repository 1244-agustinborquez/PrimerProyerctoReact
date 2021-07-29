import React from 'react'

export default function Image(props) {
    // destructurin de valores 
    const {largeImageURL, likes, previewURL, tags, views} = props.imagen
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
            <img src={previewURL} alt={tags} className='card-img-top' />
            <div className='card-body' >
                <p className='card-text' > Me Gustas: {likes}</p>
                <p className='card-text' > Views: {views}</p>

                <a href={largeImageURL} target='_blank' className='btn btn-block btn-primary '>Ver Imagen</a>
            </div>
            </div>
        </div>
    )
}
