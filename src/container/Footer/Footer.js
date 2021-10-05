import "./Footer.css"
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'


const faPlus = <FontAwesomeIcon icon={faTelegram} />
const faGram = <FontAwesomeIcon icon={faInstagram} />
const faTube = <FontAwesomeIcon icon={faYoutube} />
const faTok = <FontAwesomeIcon icon={faTiktok} />

const Footer = () => {
    return (
        <div>

<div class="container">
            <div class="row">
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200">
                        <h1 className="telegram">250K {faPlus}</h1>
                        <p>Subscribers in Telegram</p>
                        <div class="chiziq1"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                        <h1 className="youtube">7.45K {faTube}</h1>
                        <p>Subscribers in You Tube</p>
                        <div class="chiziq2"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                        <h1 className="tiktok">92K {faTok}</h1>
                        <p>Subscribers in Tik Tok</p>
                        <div className="chiziq3"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <h1 className="instagram">64K {faGram}</h1>
                        <p>Subscribers in Instagram</p>
                        <div className="chiziq4"></div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Footer
