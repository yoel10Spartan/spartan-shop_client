import React from 'react'
import { MenuSecondary } from '../ui/menuSecondary/MenuSecondary'

export const AboutUs = () => {
    return (
        <div>
            <MenuSecondary />
            <p style={{
                fontWeight: '600',
                padding: '50px'
            }}>¿Quiénes somos?</p>
            <p style={{
                padding: '0 50px 50px 50px',
                fontSize: '20px',
                textAlign: 'justify'
            }}>
                En Spartan Gallery ayudamos a los pintores-artistas del Estado de Tlaxcala a la divulgación y venta de su obra y queremos hacer llegar a coleccionistas, aficionados e interesados por el arte, nuestras propuestas de artistas contemporáneos con una importante trayectoria en el panorama nacional e internacional, de una forma fácil y accesible.
                Escultura, ilustración, diseño, fotografía, nuevas tecnologías y formatos, un espacio multidisciplinar en el que estarán representados los principales movimientos de la vanguardia artística de finales del siglo XX y del siglo XXI.
                Especial atención merece en este espacio el arte urbano con la presencia de artistas con origen en el grafiti underground. Muros y paredes repartidos por el mundo en los que han plasmado su mensaje, sus inquietudes, su crítica o su inconformismo. Artistas que han abandonado el arte ilegal pero que mantienen íntegro su magnetismo, su expresividad, la ausencia de reglas y en definitiva la libertad que les permite expresarse sobre cualquier soporte, en cualquier entorno y crear sus propias exposiciones en la gran galería de la calle. La calidad de sus obras ha sido reconocida por coleccionistas, instituciones y plataformas culturales y artísticas en Tlaxcala y fuera de nuestras fronteras.
            </p>
            <div style={{
                marginBottom: '50px'
            }}>
                <p style={location}>Nombre entidad: Spartan Gallery</p>
                <p style={location}>Dirección: Calle 5 de mayo, Santa Ana, Chiautempan, Tlaxcala</p>
                <p style={location}>Teléfono: 2461508658</p>
                <p style={location}>Correo electrónico: munozzecuayoel@gmail.com</p>
            </div>
        </div>
    )
}

const location = {
    marginLeft: '50px',
    fontSize: '20px',
    textAlign: 'justify'
}