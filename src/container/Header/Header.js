import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faTools} from '@fortawesome/free-solid-svg-icons'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { faUserAlt} from '@fortawesome/free-solid-svg-icons'

const faIkonka = <FontAwesomeIcon icon={faAngleDown} />
const faArxiv = <FontAwesomeIcon icon={faArchive} />
const faNastroyka = <FontAwesomeIcon icon={faTools} />
const faSultonali = <FontAwesomeIcon icon={faCommentDots} />
const faProfil = <FontAwesomeIcon icon={faUserAlt} />

const Header = () => {  
    
  
    return (
        <div>
       
        <header className="d-flex">
        <div class="d-flex">
         <a href="#">  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaCUjlDiaxvjGJdrIlSfALkYiSa1WjEjMrw&usqp=CAU" alt="" className="logo" />  </a>
            <ul class="menu d-none d-lg-flex">
            <li><a href="https://faberlic.netlify.app" class="lll">Сообщения  {faSultonali}</a>
           
                </li>

                <li><a href="#" class="lll"> Мой профиль {faProfil}</a>
                        
                </li>
               
                <li><a href="#" class="lll">Настройки {faNastroyka} </a>
                    <ul class="inner-menu d-flex">
                        <li>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">Мобильные приложения</a></li>
                                <li><a href="#">Помощь</a></li>
                                <li><a href="#">Платные услуги</a></li>
                                <li><a href="#">Бизнес на OLX</a></li>
                                <li><a href="#">Реклама на сайте</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">Условия использования</a></li>
                                <li><a href="#">Политика конфиденциальности</a></li>
                                <li><a href="#">Партнёры</a></li>
                                <li><a href="#">Как продавать и покупать? </a></li>
                                <li><a href="#">Правила безопасности</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><a href="#" class="lll">Дополнительно {faIkonka}</a>
                    <ul class="inner-menu kkk">
                        <li><a href="#">Карта сайта</a></li>
                        <li><a href="#">Карта регионов</a></li>
                        <li><a href="#">Карьера в OLX</a></li>
                        <li><a href="#">Обратная связь</a></li>
                    </ul>
                </li>
               
                <li><a href="#" class="lll"> Премиум объявления {faArxiv}</a>  
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
