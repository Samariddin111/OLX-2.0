import React, { useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faUserAlt, faCommentDots, faTools, faArchive, faBars } from '@fortawesome/free-solid-svg-icons'
const faIkonka = <FontAwesomeIcon icon={faAngleDown} />
const faArxiv = <FontAwesomeIcon icon={faArchive} />
const faNastroyka = <FontAwesomeIcon icon={faTools} />
const faSultonali = <FontAwesomeIcon icon={faCommentDots} />
const faProfil = <FontAwesomeIcon icon={faUserAlt} />
const bars = <FontAwesomeIcon icon={faBars} />

const Header = () => {  
    
    const[open, setOpen]= useState(false)
    
  
    return (
        <>
       
        <header className="">
            <div className="d-flex bars justify-content-between">
                <a href="/#">  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaCUjlDiaxvjGJdrIlSfALkYiSa1WjEjMrw&usqp=CAU" alt="" className="logo" /> </a>
                <p onClick={()=>setOpen(!open)} className="sidebar">{bars}</p>
                <ul class={"menu d-lg-flex " + (open && 'block')}>
                    <li><a href="https://www.olx.uz/account/?ref[0][params][url]=https%3A%2F%2Fwww.olx.uz%2Fmyaccount%2Fanswers%2F&ref[0][action]=redirector&ref[0][method]=index" class="lll">Сообщения  {faSultonali}</a></li>

                    <li><a href="https://www.olx.uz/account/?ref[0][params][url]=https%3A%2F%2Fwww.olx.uz%2Fmyaccount%2Fanswers%2F&ref[0][action]=redirector&ref[0][method]=index" class="lll"> Мой профиль {faProfil}</a></li>
                    
                    <li>
                        <a href="/#" className="lll">Настройки {faNastroyka} </a>
                            <ul class="inner-menu bir">
                                <li>
                                    <ul>
                                        <li><a href="https://www.olx.uz/mobileapps/">Мобильные приложения</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Помощь</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Платные услуги</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Бизнес на OLX</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Реклама на сайте</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="https://www.olx.uz/mobileapps/">Условия использования</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Политика конфиденциальности</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Партнёры</a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Как продавать и покупать? </a></li>
                                        <li><a href="https://www.olx.uz/mobileapps/">Правила безопасности</a></li>
                                    </ul>
                                </li>
                            </ul>
                    </li>

                    <li><a href="/#" className="lll">Дополнительно {faIkonka}</a>
                        <ul class="inner-menu kkk">
                            <li><a href="/#">Карта сайта</a></li>
                            <li><a href="/#">Карта регионов</a></li>
                            <li><a href="/#">Карьера в OLX</a></li>
                            <li><a href="/#">Обратная связь</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="https://business.olx.uz/" class="lll"> Премиум объявления {faArxiv}</a></li>
                </ul>

            </div>

        </header>

    </>
         
       
    
    )
    
}
export default Header 
