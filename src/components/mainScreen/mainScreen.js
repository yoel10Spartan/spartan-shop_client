import React from 'react';
import { ArtistCarousel } from '../artistsComponents/ArtistCarousel';
import { AllProducts } from '../productsScreen/allProducts/AllProducts';
import { RandomProducts } from '../productsScreen/randomProducts/RandomProducts';
import { InputSearch } from '../ui/menuPrimary/InputSearch';
import { MenuSecondary } from '../ui/menuSecondary/MenuSecondary';
import { Slider } from '../ui/sliderComponent/Slider';

export const mainScreen = () => {
    return (
        <>
            <MenuSecondary />
            <Slider />
            <RandomProducts />
            <ArtistCarousel />
            <AllProducts />
        </>
    )
}