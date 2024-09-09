import React from "react";
import "../interior.scss";
import { CiHeart } from "react-icons/ci";
import categoryApi from "../../../../categoryApi/categoryApi";

const data = categoryApi[0].interiorItem[2];

function SteeringWheelCover() {
  return (
    <div>
      <div className="interior-container">
        <div className="interior-section">
          <div className="interior-cards">
            {data.wheelProduct.map((item, index) => (
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
                    <div>
                      <button>add to cart</button>
                    </div>
                    <div className="wishlist">
                      <CiHeart className="addToWishlist" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SteeringWheelCover;
