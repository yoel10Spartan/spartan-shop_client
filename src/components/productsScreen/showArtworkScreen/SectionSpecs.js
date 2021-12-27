import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewProduct } from '../../../actions/artwork';
import { Button } from '../../../styledComponents/authStyles';
import { 
    ButtonStock, 
    ContainerButtomCart, 
    ContainerDescription, 
    ControllAdd, 
    ShowNumber, 
    SpecsArtwork, 
    SpecsItem, 
    StockInfo, 
    TextOffer
} from '../../../styledComponents/descriptionStyles';
import { SectionPrice } from './SectionPrice';

export const SectionSpecs = ({
    bracket_artwork,
    category,
    frame_artwork,
    in_offer_artwork,
    material_artwork,
    measurement_artwork,
    name_artist,
    porcentage_offer_artwork,
    price_artwork,
    stock_artwork,
    style_artwork,
    subcategory,
    technique_artwork,
    title_artwork,
    price_in_offer,
    handlers,
    id_artist,
    url_main_photo_artwork,
    id_artwork,
}) => {

    const dispatch = useDispatch();
    const [ handleIncrement, handleDecrement, handleStock ] = handlers;

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
        <ContainerDescription>
            <p>{ title_artwork }</p>
            { Boolean( in_offer_artwork ) && <TextOffer>¡This work of art is on sale!</TextOffer> }
            { 
                in_offer_artwork 
                    ?   <SectionPrice 
                            price_1={ price_in_offer }
                            price_2={ price_artwork }
                            porcentage={ porcentage_offer_artwork }
                        /> 
                    :   <SectionPrice 
                            price_1={ price_artwork }
                        /> 
            }
            
            <Link 
                to={ `/spartan_artist/client/show_artist_screen/${ id_artist }` }
                style={ link }
            > 
                { name_artist } 
            </Link>

            <SpecsArtwork>
                <ul>
                    <SpecsItem>
                        <span style={FontWeight}> Category: </span> 
                        { category } 
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Subcategory: </span> 
                        { subcategory } 
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Technique: </span> 
                        { technique_artwork } 
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Style: </span> 
                        { style_artwork }
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Measurement: </span> 
                        { measurement_artwork }
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Material: </span> 
                        { material_artwork }
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Breacket: </span> 
                        { bracket_artwork }
                    </SpecsItem>
                    <SpecsItem>
                        <span style={FontWeight}> Frame: </span> 
                        { frame_artwork ? 'Si' : 'No' }
                    </SpecsItem>
                </ul>
                <form className='id_form' style={{marginRight: '50px'}}>
                    <p class="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5"/>
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4"/>
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3"/>
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2"/>
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" />
                        <label for="radio5">★</label>
                    </p>
                </form>
            </SpecsArtwork>

            <ControllAdd>
                <StockInfo>
                    <span style={FontWeight}> Stock: </span> 
                    { stock_artwork } 
                </StockInfo>
                
                <ButtonStock
                    disabled={ handleStock < stock_artwork }
                    onClick={ handleDecrement }
                >
                    <i class='bx bx-chevron-left'></i>
                </ButtonStock>
                <ShowNumber>
                    { handleStock }
                </ShowNumber>
                <ButtonStock
                    disabled={ handleStock >= stock_artwork }
                    onClick={ handleIncrement }
                >
                    <i class='bx bx-chevron-right' ></i>
                </ButtonStock>
            </ControllAdd>

            <ContainerButtomCart>
                <Button style={ btnCart } onClick={handleAddPrudct}> 
                    Add to cart 
                </Button>
            </ContainerButtomCart>
        </ContainerDescription>
    )
}

const FontWeight = { 
    fontWeight: '600',
    marginRight: '10px'
}

const btnCart = {
    borderRadius: '0',
    background: 'transparent',
    color: '#000',
    borderColor: '#000'
}

const link = { 
    fontSize: '17px', 
    marginTop: '20px', 
    fontWeight: '0'
}