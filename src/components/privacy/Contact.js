import React from 'react';
import { MenuSecondary } from '../ui/menuSecondary/MenuSecondary';
import './contac.css';

export const Contact = () => {
    return (
        <div>
            <MenuSecondary />
            <form class="form">
                <p className='h2'>CONTACT US</p>
                <p className='p__input' type="Name:">
                    <input className='input__text' placeholder="Write your name here.."></input>
                </p>
                <p className='p__input' type="Email:">
                    <input className='input__text' placeholder="Let us know how to contact you back.."></input>
                </p>
                <p className='p__input' type="Message:">
                    <input className='input__text' placeholder="What would you like to tell us.."></input>
                </p>
                <button className='btn_send'>Send Message</button>
                <div className='container__contact'>
                    <span class="fa fa-phone"></span>2461589542
                    <span class="fa fa-envelope-o"></span>spartagallery@gmail.com
                </div>
            </form>
        </div>
    )
}
