import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllPoductShoping, deleteProduct } from '../../actions/artwork'
import { Button, Input } from '../../styledComponents/authStyles'
import { ButtonStock, ControllAdd, ShowNumber } from '../../styledComponents/descriptionStyles'
import { ModalPayment } from './ModalPayment'
import Swal from "sweetalert2";
import { useForm } from '../../hooks/useForm'

export const ShoppingCart = () => {

    const dispatch = useDispatch();
    const { shopingCart } = useSelector(state => state.artwork);
    const [priceFinal, setPriceFinal] = useState(0);
    const [ values, handleInputChange, reset ] = useForm({
        direccion: '',
        municipio: '',
        estado: '',
        exterior: '',
        codigoPostal: '',
        nombre: '',
        telefono: '',
        referencia: ''
    })

    const {
        direccion,
        municipio,
        estado,
        exterior,
        codigoPostal,
        nombre,
        telefono,
        referencia
    } = values;

    const len = shopingCart.length;

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));

    }

    useEffect(() => {
        setPriceFinal(0);
        for(let i of shopingCart){
            setPriceFinal((price) => price + i.price_artwork)
        }
    }, [len])

    // =================================================
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }


    function closeModal() {
        setIsOpen(false);
        Swal.fire({
            icon: 'success',
            title: 'Successful payment',
            text: 'You will receive a confirmation email!'
        })
        dispatch(deleteAllPoductShoping())
    }

    const handleInformation = () => {
        reset()
        Swal.fire({
            icon: 'success',
            title: 'Shipping information successfully stored',
            text: 'You can check our privacy policies!'
        })
    }

    useEffect(() => {
        setPriceFinal(0);
        for(let i of shopingCart){
            if(Boolean(i.in_offer_artwork)){
                setPriceFinal((price) => price + i.price_in_offer)
            } else {
                setPriceFinal((price) => price + i.price_artwork)
            }
        }
    }, [len])

    return (
        <div class="main" style={{marginTop: '50px'}}>
                {
                    shopingCart.map( item => (
                        <div style={{ marginTop: '0' }} className='container__artworks' key={item.id_artwork}>
                            <div className='container__artwork-shopping'>
                                <img src={item.url_main_photo_artwork} alt='artwork' />
                                <div className='description__product'>
                                    <p>{item.title_artwork}</p>
                                    <p>Autor: {item.name_artist}</p>
                                    <p className='price__shopping-artwork'>${item.price_artwork}</p>
                                </div>
                                <div className='price__artwork'>
                                    <ControllAdd>
                                        <ButtonStock>
                                            <i class='bx bx-chevron-left'></i>
                                        </ButtonStock>
                                        <ShowNumber>
                                            0
                                        </ShowNumber>
                                        <ButtonStock>
                                            <i class='bx bx-chevron-right' ></i>
                                        </ButtonStock>
                                    </ControllAdd>
                                    <div className='price__total' style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        fontSize: '15px',
                                        paddingRight: '20px'
                                    }}>
                                        <p>Final price</p>
                                        <p>${Boolean(item.in_offer_artwork) ? item.price_in_offer : item.price_artwork}</p>
                                    </div>
                                </div>
                                <ButtonStock style={{width: '100px'}} onClick={() => handleDelete(item.id_artwork)}>
                                    Delete
                                </ButtonStock>
                            </div>     
                        </div>
                    ))
                }                

            { len === 0 ? <div style={{marginBottom: '50px'}}>No has agregado productos al carrito</div> : <section class="shopping-cart">
                <footer class="_grid cart-totals">
                    <div class="_column subtotal" id="subtotalCtr">
                        <div class="cart-totals-key">Total del precio de los productos</div>
                        <div class="cart-totals-value">${priceFinal}</div>
                    </div>
                    <div class="_column shipping" id="shippingCtr">
                        <div class="cart-totals-key">Precio del envio</div>
                        <div class="cart-totals-value">$0.00</div>
                    </div>
                    <div class="_column taxes" id="taxesCtr">
                        <div class="cart-totals-key">IVA</div>
                        <div class="cart-totals-value">$30.00</div>
                    </div>
                    <div class="_column total" id="totalCtr">
                        <div class="cart-totals-key">Total</div>
                        <div class="cart-totals-value">${priceFinal + 30}</div>
                    </div>
                    <div class="_column checkout" onClick={openModal}>
                        <button class="_btn checkout-btn entypo-forward">Checkout</button>
                    </div>
                </footer>
            </section>}

            <ModalPayment modalIsOpen={modalIsOpen} closeModal={closeModal}/>

            <p style={{
                marginBottom: '30px'
            }}>Informacion de envio</p>

            <div style={{
                display: 'flex',
                maxWidth: '100vw',
                flexDirection: 'column',
            }}>
                <Input
                    type="text"
                    placeholder="Direccion de envio"
                    name='direccion'
                    style={inputSend}
                    value={direccion}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Municipio"
                    name='municipio'
                    style={inputSend}
                    value={municipio}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Estado"
                    name='estado'
                    style={inputSend}
                    value={estado}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Numero de exterior"
                    name='exterior'
                    style={inputSend}
                    value={exterior}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Codigo Postal"
                    name='codigoPostal'
                    style={inputSend}
                    value={codigoPostal}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Nombre tal y como esta en el INE"
                    name='nombre'
                    style={inputSend}
                    value={nombre}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Telefono de contacto"
                    name='telefono'
                    style={inputSend}
                    value={telefono}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="Referencia de la direccion"
                    name='referencia'
                    style={inputSend}
                    value={referencia}
                    onChange={handleInputChange}
                />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <input type='checkbox' style={{
                        marginRight: '10px'
                    }} />
                    <p style={{
                        fontSize: '15px'
                    }}>Aceptar politicas de privacidad</p>
                </div>
                <Button style={{marginBottom: '20px'}} onClick={handleInformation}>
                    Guardar información
                </Button>
            </div>

        </div>
    )
}

const inputSend = {
    margin: '10px',
    width: '500px'
}