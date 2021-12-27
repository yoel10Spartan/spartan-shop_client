import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewProduct } from '../../../actions/artwork';

import './cardProduct.css';

export const CardArtwork = ({
    bracket_artwork,
    category,
    frame_artwork,
    free_shipping_artwork,
    id_artwork,
    in_offer_artwork,
    material_artwork,
    measurement_artwork,
    porcentage_offer_artwork,
    price_artwork,
    stock_artwork,
    style_artwork,
    subcategory,
    technique_artwork,
    title_artwork,
    url_main_photo_artwork,
    urls_all_photos_artwork,
    name_artist,
    price_in_offer
}) => {


    const dispatch = useDispatch();

    const offer = Boolean( in_offer_artwork );

    const price = ( price_1, price_2 ) => {
        return (
            <>
                <small>{ price_1 }</small>
                ${ price_2 }
            </>
        );
    }

    const handleAddPrudct = () => {
        const product = {
            id_artwork,
            title_artwork,
            price_artwork,
            price_in_offer,
            url_main_photo_artwork,
            price_in_offer,
            name_artist,
            in_offer_artwork
        }
        dispatch(addNewProduct(product));
    }

    return (
        <div className="product-card">
            { offer && <div className="badge">Offer { porcentage_offer_artwork }%</div> }
            <div className="product-tumb">
                <img src={ url_main_photo_artwork } alt="" />
            </div>
            <div className="product-details">
                <span className="product-catagory">{ name_artist }</span>
                <h4><Link to={ `/spartan_artworks/client/show_artwork/${ id_artwork }` }>{ title_artwork }</Link></h4>
                <div className="product-bottom-details">
                    <p>Category: { category }</p>
                    <div className="product-price">
                        { offer 
                            ? price( price_artwork, price_in_offer, porcentage_offer_artwork ) 
                            : price( '', price_artwork ) 
                        }
                    </div>
                    <div className="product-links" onClick={ handleAddPrudct }>
                        <Link to="">
                            <i class='bx bx-cart'></i>
                        </Link>
                    </div>
                </div>
            </div>
	    </div>
    );
}
