import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'reactstrap'
import "./Home.css"

const categories = [ 
    { 
         to:"detskiy-mir",
          backgroundColor:"#ffce32",
           img:"",
            title:"Детский мир"
        },
        { 
            to:"nedvijimost",
             backgroundColor:"#3a77ff",
              img:"",
               title:"Недвижимость"
           },
           { 
            to:"transport",
             backgroundColor:"#23e5db",
              img:"",
               title:"Транспорт"
           },
           { 
            to:"rabota",
             backgroundColor:"#ff5636",
              img:"",
               title:"Работа"
           },
           { 
            to:"hayvonlar",
             backgroundColor:"#fff6d9",
              img:"",
               title:" Животные"
           },
           { 
            to:"uy-va-sad",
             backgroundColor:"#ceddff ",
              img:"",
               title:"Дом и сад"
           },
           { 
            to:"elektronika",
             backgroundColor:"#c8f8f6",
              img:"",
               title:"Электроника"
           },
           { 
            to:"biznes",
             backgroundColor:"#ffd6c9",
              img:"",
               title:"Бизнес и услуги"
           },
           { 
            to:"moda",
             backgroundColor:"#ffce32",
              img:"",
               title:"Мода и стиль"
           },
           { 
            to:"hobby",
             backgroundColor:"#ceddff",
              img:"",
               title:"Хобби, отдых и спорт"
           },
           
]

const Home = () => { 
    return (
<Fade>
<div>
       <div className="container py-5">
       <h1 className="text-center">Главные категории</h1>
       <div className="categories">
    {categories.map(  v => 
         <Link to={v.to} className="category">
         <div className="circle" style={{backgroundColor:v.backgroundColor}} >
                <img src={v.img} alt="" />
            </div>
            <p className="sarlavhasi">{v.title}</p>
         </Link> 
        )}
          

       </div>
       </div>
        </div>
</Fade>
    )
}

export default Home
