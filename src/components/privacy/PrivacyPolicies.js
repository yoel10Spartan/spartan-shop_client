import React from 'react'
import { MenuSecondary } from '../ui/menuSecondary/MenuSecondary'

export const PrivacyPolicies = () => {
    return (
        <div>
            <MenuSecondary />
            <p style={{
                textAlign: 'center',
                margin: '10px 0 30px 0',
                fontWeight: '600'
            }}> Politicas de privacidad </p>
            <p style={{
                padding: '0 50px 50px 50px',
                fontSize: '20px',
                textAlign: 'justify'
            }}>
                Para SPARTAN GALLERY, plataforma de arte y artistas tlaxcaltecas es muy
                importante la protección de la privacidad y de los datos personales de los usuarios.
                Por lo tanto, Spartan Gallery asume un compromiso permanente en la forma en la
                que trata y conserva los datos personales de los usuarios.
            </p>
            <p style={{
                fontWeight: '600',
                marginLeft: '50px'
            }}>
                ¿Para qué finalidades recabamos los datos que le solicitamos?
            </p>
            <p style={{
                fontWeight: '600',
                padding: '50px'
            }}>
                Formulario de registro y/o creación de cuenta
            </p>
            <p style={{
                padding: '0 50px 50px 50px',
                fontSize: '20px',
                textAlign: 'justify'
            }}>
            1. Finalidad: La finalidad del presente formulario es tramitar su solicitud de
                registro en el sitio web para poder iniciar la sesión en la web como usuario
                registrado, y agilizar el proceso de compra.
            2. Legitimación: La legitimación para el tratamiento de los datos de carácter
                personal se basa en el consentimiento expreso otorgado por el interesado.
            3. Destinatarios: No se ceden datos a terceros salvo obligación legal.
            </p>
        </div>
    )
}
