import React, { useState } from 'react';
import { MenuSecondary } from '../ui/menuSecondary/MenuSecondary';
import './faqs.css';

export const FAQS = () => {

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    return (
        <div>
            <MenuSecondary />
            <section>
                <div class="faqs__questions">         
                    <ul class="faq-list">
                        <li className={`${active1 ? 'the-active': ''}`} onClick={ () => setActive1(!active1) }>
                            <h4 class="faq-heading"> ¿Que metodos de pago aceptan? </h4>
                            <p className={ `read ${active1 ? '': 'faq-text'}` }>
                                Aceptamos solo pagos con targeta de credito o de debito,
                                VISA, MASTERCAD.
                            </p>
                        </li> 
                        <li className={`${active2 ? 'the-active': ''}`} onClick={ () => setActive2(!active2) }>
                            <h4 class="faq-heading"> ¿Guardan la información de la targeta? </h4>
                            <p className={ `read ${active2 ? '': 'faq-text'}` }>
                                La informacion no se guarda, se utiliza una API de Stripe.com para
                                procesar los pagos.
                            </p>
                        </li>
                        <li className={`${active3 ? 'the-active': ''}`} onClick={ () => setActive3(!active3) }>
                            <h4 class="faq-heading"> ¿En donde puedo consultar las politicas de privacidad? </h4>
                            <p className={ `read ${active3 ? '': 'faq-text'}` }>
                                Las puede checar en el menu que esta en la parte 
                                superior, ahi apareceran todas las politcas de privacidad y un formulario
                                de contacto, por si le interesa mas informacion.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
