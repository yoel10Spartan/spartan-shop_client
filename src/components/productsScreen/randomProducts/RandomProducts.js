import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const RandomProducts = () => {

    const { artworkRandom } = useSelector(state => state.artwork);

    return (
        <div className='container__random_products'> 
            {
                artworkRandom.map( artwork => (
                    <div className='container__product' key={ artwork.id_artwork }>
                        <div className='container__text'>
                            <p>{ artwork.title_artwork }</p>
                            <Link to={`/spartan_artworks/client/show_artwork/${ artwork.id_artwork }`}>
                                More information...
                            </Link>
                        </div>
                        <img src={ artwork.url_main_photo_artwork } alt='' />
                    </div>
                ))
            }
        </div>
    )
}