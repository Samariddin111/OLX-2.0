import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'reactstrap'
import "./Home.css"

const categories = [ 
    { 
         to:"detskiy-mir",
          backgroundColor:"#ffce32",
           img:"https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
            title:"Детский мир"
        },
        { 
            to:"nedvijimost",
             backgroundColor:"#3a77ff",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
               title:"Недвижимость"
           },
           { 
            to:"transport",
             backgroundColor:"#23e5db",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
               title:"Транспорт"
           },
           { 
            to:"rabota",
             backgroundColor:"#ff5636",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
               title:"Работа"
           },
           { 
            to:"hayvonlar",
             backgroundColor:"#fff6d9",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
               title:" Животные"
           },
           { 
            to:"domisad",
             backgroundColor:"#ceddff ",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
               title:"Дом и сад"
           },
           { 
            to:"elektronika",
             backgroundColor:"#c8f8f6",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
               title:"Электроника"
           },
           { 
            to:"biznesuslugi",
             backgroundColor:"#ffd6c9",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
               title:"Бизнес и услуги"
           },
           { 
            to:"modastil",
             backgroundColor:"#ffce32",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
               title:"Мода и стиль"
           },
           { 
            to:"hobby",
             backgroundColor:"#ceddff",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
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
