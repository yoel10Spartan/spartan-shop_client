import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ArtistScreen } from '../components/artistsComponents/ArtistScreen';
import { Chat } from '../components/artistsComponents/Chat';
import { mainScreen } from '../components/mainScreen/mainScreen';
import { AboutUs } from '../components/privacy/AboutUs';
import { Contact } from '../components/privacy/Contact';
import { FAQS } from '../components/privacy/FAQS';
import { PrivacyPolicies } from '../components/privacy/PrivacyPolicies';
import { CategoryProducts } from '../components/productsScreen/productsCategory/CategoryProducts';
import { ArtworkScreen } from '../components/productsScreen/showArtworkScreen/ArtworkScreen';
import { ShoppingCart } from '../components/shoppingCart/ShoppingCart';
import { MenuPrimary } from '../components/ui/menuPrimary/MenuPrimary';
import { RouteProtection } from './RouteProtection';

export const PublicRoutes = () => {

    const { id_user } = useSelector(state => state.auth.login_information);

    return (
        <>
            <MenuPrimary />

            <Switch>
                <Route 
                    exact 
                    path='/spartan_books/prinsipal' 
                    component={ mainScreen }     
                />
                
                <RouteProtection
                    exact 
                    path='/spartan_artworks/client/show_artwork/:id' 
                    component={ ArtworkScreen }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <RouteProtection
                    exact 
                    path='/spartan_artist/client/show_artist_screen/:id' 
                    component={ ArtistScreen }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <RouteProtection
                    exact 
                    path='/spartan_books/client/shoping_car' 
                    component={ ShoppingCart }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <RouteProtection
                    exact 
                    path='/spartan_books/client/chat' 
                    component={ Chat }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <RouteProtection
                    exact 
                    path='/spartan_books/client/artwork_by_category/:id' 
                    component={ CategoryProducts }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <RouteProtection
                    exact 
                    path='/spartan_books/client/artwork_by_category/:id' 
                    component={ CategoryProducts }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <Route
                    exact 
                    path='/spartan_books/client/about_us' 
                    component={ AboutUs }
                />

                <Route
                    exact 
                    path='/spartan_books/client/faqs' 
                    component={ FAQS }
                />

                <Route
                    exact 
                    path='/spartan_books/client/privacy_policies' 
                    component={ PrivacyPolicies }
                />

                <RouteProtection
                    exact 
                    path='/spartan_books/client/contact' 
                    component={ Contact }
                    isAuthenticated={ !!id_user }
                    pathRedirect='/spartan_books/login'  
                />

                <Redirect to='/spartan_books/prinsipal' />
            </Switch>

        </>
    )
}
