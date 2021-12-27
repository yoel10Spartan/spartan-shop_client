import React from 'react';
import { Slideshow, Slide } from './Slideshow/Slideshow';

import img1 from '../../../img/1.jpg';
import img2 from '../../../img/2.jpg';
import img3 from '../../../img/3.jpg';

export const Slider = () => {

    return (
        <main style={{ maxWidth: '100vw', overflow: 'hidden' }}>
			<Slideshow controles={true} autoplay={true}>
				<Slide>
					<img src={img1} alt=""/>
				</Slide>
				<Slide>
					<img src={img2} alt=""/>
				</Slide>
				<Slide>
					<img src={img3} alt=""/>
				</Slide>
			</Slideshow>
        </main>
    )
}