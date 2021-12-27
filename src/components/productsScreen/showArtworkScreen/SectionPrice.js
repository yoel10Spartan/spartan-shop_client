import React from 'react'
import { PorcentageOffer, PriceActual, PriceContainer, PricePrevious } from '../../../styledComponents/descriptionStyles'

export const SectionPrice = ({ price_1, price_2, porcentage }) => {
    return (
        <PriceContainer>
            { Boolean( price_2 ) && <PricePrevious>${ price_2 }</PricePrevious> }
            <PriceActual>${ price_1 }</PriceActual>
            { Boolean( porcentage ) && <PorcentageOffer>- { porcentage }%</PorcentageOffer> }
        </PriceContainer>
    )
}
