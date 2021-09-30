import React from 'react'
import './Medium.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'

const faQidirish = <FontAwesomeIcon icon={faSearch} />
const faKarta = <FontAwesomeIcon icon={faMapMarkerAlt} />
const faGlobus = <FontAwesomeIcon icon={faGlobe} />

const Medium = () => {
    return (
        <div>
            <div class="container">
            <div class="row">
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200">
                        <h1>901</h1>
                        <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                        <div class="chiziq"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                        <h1>365</h1>
                        <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                        <div class="chiziq"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <h1>1032</h1>
                        <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                        <div className="chiziq"></div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="cardd" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                        <h1>6653</h1>
                        <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                        <div className="chiziq"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Medium


