import React from 'react'
import "./categoriesDetailes.scss";
import categoryApi from '../../../categoryApi/categoryApi';
import { Link, useNavigate } from 'react-router-dom';

function CategoriesDetailes() {
    const getData = JSON.parse(localStorage.getItem("productDetail"))

    const categoryData = categoryApi[0].interiorItem[0].seatProduct

    const data = categoryData.filter((item) =>
        item.objectId === getData
    )

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }

    const addToCart = (i)=> {
        const setData = JSON.parse(localStorage.getItem("cartData")) || [];
        setData.push(i)
        localStorage.setItem("cartData",JSON.stringify(setData))
    }
    return (
        <div>
            <div className='categories-container'>
                <div className='back-btn'>
                    <button onClick={handleGoBack}>←</button>
                </div>
                {data.map((item, i) =>
                    <div className='categories-detailes-main-grid'>
                        <div className='categories-detailes-img'>
                            <img src={item.img} />
                        </div>
                        <div className='categories-info'>
                            <h2>{item.title}</h2>
                            {/* <div className='categories-detailes'>
                                <p>{item.}</p>
                            </div> */}
                            <p>{item.prize}</p>
                            <div className='categories-detailes-btn'>
                                <button onClick={() => addToCart(item.objectId)}>add to cart</button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default CategoriesDetailes