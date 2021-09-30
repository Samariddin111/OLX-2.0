import "./Category.css"
import React from 'react'
import { useParams } from "react-router"
import datas from "../../data"

const Category = () => {

const {category} = useParams();
const data = datas[category];
console.log(data);

    return (
        <div className="container py-5">
<h1 className="mb-4">  {category}</h1>
<div className="products">

</div>
        </div>
    )
}

export default Category
