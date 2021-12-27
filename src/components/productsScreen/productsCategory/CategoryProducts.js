import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getArtworksByCategory } from '../../../actions/artwork';
import { MenuSecondary } from '../../ui/menuSecondary/MenuSecondary';
import { AllProducts } from '../allProducts/AllProducts';

export const CategoryProducts = () => {

    const { id } = useParams();
    const { categories } = useSelector(state => state.artwork);
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getArtworksByCategory(id) );
    }, [dispatch]);

    useEffect(() => {
        const cate = categories.filter( item => item.id == parseInt(id, 10) ? item.category : '' );
        setCategory(cate[0].category)
    }, [id])

    return (
        <div>
            <MenuSecondary />
            <p style={{
                textAlign: 'center',
                marginTop: '30px',
                fontWeight: '600'
            }}>{category}</p>
            <AllProducts />
        </div>
    )
}
