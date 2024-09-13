import React from "react";
import "../interior.scss";
import { CiHeart } from "react-icons/ci";
import categoryApi from "../../../../categoryApi/categoryApi";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const data = categoryApi[0].interiorItem[2];

function SteeringWheelCover() {
  const handleClick = (i) => {
    localStorage.setItem("productDetail", JSON.stringify(i))
  }
  return (
    <div className="interior">
      <div className="container">
        <section>
          <div className="interior-cards">
            {data.wheelProduct.map((item, index) => (
              <Link to={"/categoryDetailes"} onClick={() => { handleClick(item.objectId) }} key={index}>

                <div className="card">
                  <div className="card-img">
                    <img src={item.img} />
                  </div>
                  <div className="card-detailes">
                    <div className="card-title">
                      <p>{item.title}</p>
                    </div>
                    <div className="product-price">
                      <p>{item.prize}</p>
                    </div>
                    <div className="product-buy">
                      <div className="add-to-cart-btn">
                        <button >add to cart</button>
                      </div>
                      <div className="wishlist">
                        <FaRegHeart className="addToWishlist" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SteeringWheelCover;
