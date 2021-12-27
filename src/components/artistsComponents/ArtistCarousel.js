import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './ArtistCarousel.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export const ArtistCarousel = () => {

    const { artist } = useSelector(state => state.artist);

    return (
        <Swiper
            spaceBetween={ 30 }
            centeredSlides={ true }
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true
            }}
            navigation={ true }
            className='mySwiper'
        >
            {
                artist.map( art => (
                    <SwiperSlide>
                        <div className='container__artist'>
                            <img src={ art.url_photo_artist } alt='' />
                            <div className='container__information'>
                                <p>{ `${art.name_artist} ${ art.lastname_artist }`  }</p>
                                <Link to={ `/spartan_artist/client/show_artist_screen/${ art.id_artist }` }>
                                    More information...
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
