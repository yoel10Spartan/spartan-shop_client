import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScrollToTop } from '../../ui/handlerScroll/ScrollToTop';
import { convertListObject, searchObject } from '../../../helpers/handlers';

import { SectionComments } from './SectionComments';
import { SectionSpecs } from './SectionSpecs';
import { SectionShipping } from './SectionShipping';
import { SectionImages } from './SectionImages';

export const ArtworkScreen = () => {

    const { id } = useParams();
    const { artworks } = useSelector(state => state.artwork);
    const [handleStock, setHandleStock] = useState(1)
    const artwork = searchObject( parseInt( id, 10 ), artworks ) || {};
    const [imageDefault, setImageDefault] = useState( artwork.url_main_photo_artwork );

    const {
        url_main_photo_artwork,
        urls_all_photos_artwork
    } = artwork;

    const listObjectImages = convertListObject( urls_all_photos_artwork, 2 );
    listObjectImages.unshift({ img: url_main_photo_artwork, alt: 'item_1' });

    const handleImageShow = ( altInfo ) => {
        const newImage = listObjectImages.find( objectImg => objectImg.alt === altInfo );
        setImageDefault( newImage.img );
    }

    const handleIncrement = () => setHandleStock( handleStock + 1 );
    const handleDecrement = () => setHandleStock( handleStock - 1 );

    return (
        <div>
            <ScrollToTop />
            <div style={{
                display: 'flex',
                width: '100%',
                height: '100%'
            }}>

                {/* ==================================================== */}

                <SectionImages 
                    mainPhoto={ url_main_photo_artwork }
                    imageDefault={ imageDefault }
                    listObjectImages={ listObjectImages }
                    handleImageShow={ handleImageShow }
                />

                {/* ==================================================== */}

                {/* ==================================================== */}
                
                <SectionSpecs 
                    { ...artwork }
                    handlers={ [ handleIncrement, handleDecrement, handleStock ] }
                />

                {/* ==================================================== */}

            </div>
            
            {/* ==================================================== */}

            <SectionShipping { ...artwork } />

            {/* ==================================================== */}
            

            {/* ==================================================== */}

            <SectionComments />

            {/* ==================================================== */}

        </div>
    )
}