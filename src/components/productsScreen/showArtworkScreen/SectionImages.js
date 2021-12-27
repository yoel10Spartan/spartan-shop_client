import React from 'react'
import { DefaultImage, ImagesContainer, Image, ContainerAllImages, ContainerImage, ImageSmall } from '../../../styledComponents/imagesArtworkStyles'

export const SectionImages = ({
    mainPhoto,
    imageDefault,
    listObjectImages,
    handleImageShow
}) => {
    return (
        <ImagesContainer>
            <DefaultImage>
                <Image 
                    src={ imageDefault || mainPhoto } 
                    alt='Representation of the painting'  
                />
            </DefaultImage>
            <ContainerAllImages>
                {
                    listObjectImages.map( img => (
                        <ContainerImage key={ img.alt }>
                            <ImageSmall 
                                alt={ img.alt }
                                src={ img.img }
                                onClick={ () => handleImageShow( img.alt ) }
                            />
                        </ContainerImage>
                    ))
                }
            </ContainerAllImages>
        </ImagesContainer>
    )
}
