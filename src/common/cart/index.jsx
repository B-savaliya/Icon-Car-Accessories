import React from 'react'
import "./cart.scss";
import categoryApi from '../../categoryApi/categoryApi';

function Cart() {

    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    const categoryData = categoryApi[0].interiorItem[0].seatProduct

    const data = categoryData.filter((item,i) =>
        cartData.includes(item.objectId)
    )

    console.log(data)

    return (
        <div>
            <div className='categories-container'>
                {data.map((item) =>
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
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Cart