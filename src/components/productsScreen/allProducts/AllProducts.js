import React from 'react'
import { useSelector } from 'react-redux'
import { searchObject, searchObjectArtist } from '../../../helpers/handlers';
import { useForm } from '../../../hooks/useForm';
import { NotFound } from '../../redirectComponents/NotFound';
import { CardArtwork } from '../../ui/cardArtwork/CardArtwork';
import { InputSearch } from '../../ui/menuPrimary/InputSearch';

export const AllProducts = ({ idArtist }) => {

    let artworks = useSelector(state => state.artwork.artworks);
    const [ values, handleInputChange ] = useForm({
        search: ''
    })

    if( idArtist ){
        artworks = searchObjectArtist( idArtist, artworks ) || [];
    }

    const {search} = values;

    artworks = artworks.filter(item => (item.title_artwork.toLowerCase().includes(search) ? item : ''));

    return (
        <div>
            <InputSearch values={values} handle={handleInputChange} />
            <div className='container_products'
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '10px',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
        {
            artworks.length !== 0 
                ? artworks.map( artwork => (
                    <CardArtwork key={ artwork.id_artwork } { ...artwork } />
                ))
                : <NotFound text='This artist has no artwork added yet' />
        }
        </div>
        </div>
    )
}