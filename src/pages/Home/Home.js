import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'reactstrap'
import "./Home.css"

const categories = [ 
    { 
         to:"detskiy-mir",
          backgroundColor:"#ffce32",
           img:"https://static10.tgstat.ru/channels/_0/f9/f94a9faf4929bff90d39a0e2f281dc18.jpg",
            title:"Детский мир"
        },
        { 
            to:"nedvijimost",
             backgroundColor:"#3a77ff",
              img:"https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
               title:"Недвижимость"
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
            <p>{v.title}</p>
         </Link> 
        )}
          

       </div>
       </div>
        </div>
</Fade>
    )
}

export default Home
