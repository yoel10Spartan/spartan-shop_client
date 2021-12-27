import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchObject, searchObjectArtist } from '../../helpers/handlers';
import { AllProducts } from '../productsScreen/allProducts/AllProducts';
import { ScrollToTop } from '../ui/handlerScroll/ScrollToTop';

export const ArtistScreen = () => {

    const { id } = useParams();
    const { artist } = useSelector(state => state.artist);

    const artist_select = searchObjectArtist( parseInt( id, 10 ), artist )[0] || [];

    const {
        description_artist,
        id_artist,
        lastname_artist,
        name_artist,
        url_photo_artist
    } = artist_select
    
    return (
        <div className='artist__screen_container'>
            <ScrollToTop />
            <div className='container__artist_information'>
                <img src={ url_photo_artist } alt='photo of Yoel' />
                <div className='information__artist'>
                    <h4>{ `${ name_artist } ${ lastname_artist }` }</h4>
                    <p>{ description_artist }</p>
                </div>
            </div>
            <Link
                to='/spartan_books/client/chat'
                style={{ display:'flex', justifyContent:'center', marginTop:'20px', cursor: 'pointer' }}
            >
                Enviar mensaje al artista
            </Link>
            <p style={{
                textAlign: 'center',
                marginTop: '50px',
                fontWeight: '600'
            }}> 
                Artist's artwork 
            </p>
            <AllProducts idArtist={ id_artist } />
        </div>
    )
}
