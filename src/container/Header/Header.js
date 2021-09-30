import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



const faIkonka = <FontAwesomeIcon icon={faAngleDown} />


const Header = () => {  
    
  
    return (
        <div>
       
        <header className="d-flex">
        <div class="d-flex">
         <a href=""> <img src="https://www.unilever.com/Images/LIPTON_OPTIMUM_RGB_STANDARD_tcm244-408771_w700.png" alt="" className="logo" /> </a> 
            <ul class="menu d-none d-lg-flex">
                <li><a href="#" class="lll">Landings {faIkonka} </a>
                    <ul class="inner-menu d-flex">
                        <li>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">Saas Service</a></li>
                                <li><a href="#">Job Directory</a></li>
                                <li><a href="#">Startup Agency</a></li>
                                <li><a href="#">Industry</a></li>
                                <li><a href="#">Furniture Shop</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Real Estate</a></li>
                                <li><a href="#">Finance Service</a></li>
                                <li><a href="#">Mental Health</a></li>
                                <li><a href="#">Saas Applications</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">Software 2.0</a></li>
                                <li><a href="#">Course</a></li>
                                <li><a href="#">App</a></li>
                                <li><a href="#">Saas Substriction</a></li>
                                <li><a href="#">Digital Service</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">Mobile App</a></li>
                                <li><a href="#">Dekstop App</a></li>
                                <li><a href="#">Web Applications</a></li>
                                <li><a href="#">eBook</a></li>
                                <li><a href="#">Social App</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><a href="#" class="lll">Pages {faIkonka}</a>
                    <ul class="inner-menu kkk">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Portfolio Details</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Utility</a></li>
                    </ul>
                </li>
                <li><a href="#" class="lll">Blog {faIkonka}</a> 
                <ul class="inner-menu kkk">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Portfolio Details</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Utility</a></li>
                    </ul>
                </li>
                <li><a href="#" class="lll">Support {faIkonka}</a>  
                <ul class="inner-menu kkk">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Portfolio Details</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Utility</a></li>
                    </ul>
                </li>
                <li><a href="#" class="lll">Types {faIkonka}</a>  
                <ul class="inner-menu kkk">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Portfolio Details</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Utility</a></li>
                    </ul>
                </li>
                <li><a href="#" class="lll"> Collection {faIkonka}</a>  
                <ul class="inner-menu kkk">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Portfolio Details</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Utility</a></li>
                    </ul>
                </li>
            </ul>
           
        </div>
        
        
      

        </header>
    </div>
         
       
    
    )
    
}
export default Header 
