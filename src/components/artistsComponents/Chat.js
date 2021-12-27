import React from 'react'
import { useSelector } from 'react-redux';

export const Chat = () => {

    const { artist } = useSelector(state => state.artist);

    const artistActive = artist[ artist.length-1 ];

    return (
        <div>
            <div id="container">
                <aside>
                    <header>
                        <input type="text" placeholder="search" />
                    </header>
                    <ul>
                        { artist.map( item => (
                            <li>
                                <img src={ item.url_photo_artist } alt={ item.name_artist } />
                                <div>
                                    <h2>{ item.name_artist } { item.lastname_artist }</h2>
                                    <h3>
                                        <span class="status orange"></span>
                                        offline
                                    </h3>
                            </div>
                        </li>
                        )) }
                    </ul>
                </aside>
                <main className='main__chat'>
                    <header>
                        <img src={ artistActive.url_photo_artist } width='50' height='50' alt={artistActive.name_artist} />
                        <div>
                            <h2>Chat with {artistActive.name_artist}</h2>
                            <h3>already 1902 messages</h3>
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
                    </header>
                    <ul id="chat">
                        <li class="you">
                            <div class="entete">
                                <span class="status green"></span>
                                <h2>{artistActive.name_artist}</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                                Hemos notado que tienes algunos incovenientes al realizar tu pago
                            </div>
                        </li>
                        <li class="me">
                            <div class="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>{artistActive.name_artist}</h2>
                                <span class="status blue"></span>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                                Si, he estado intentando y no me acepta la targeta.
                            </div>
                        </li>
                        <li class="me">
                            <div class="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>{artistActive.name_artist}</h2>
                                <span class="status blue"></span>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                                ¿Que puedo hacer?
                            </div>
                        </li>
                        <li class="you">
                            <div class="entete">
                                <span class="status green"></span>
                                <h2>{artistActive.name_artist}</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                                Podrias hacer una tranferencia, a la cuenta bancaria de SPARTAN, pero te confirmo en un momento.
                            </div>
                        </li>
                        <li class="me">
                            <div class="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>{artistActive.name_artist}</h2>
                                <span class="status blue"></span>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                                Ok, Estoy al pendiente.
                            </div>
                        </li>
                    </ul>
                    <footer>
                        <textarea placeholder="Type your message"></textarea>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
                        <a href="#">Send</a>
                    </footer>
                </main>
            </div>
        </div>
    )
}
