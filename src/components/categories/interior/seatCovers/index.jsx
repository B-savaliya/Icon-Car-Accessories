import React, { useState } from "react";
import "../interior.scss";
import { CiHeart } from "react-icons/ci";
import categoryApi from "../../../../categoryApi/categoryApi";
import { Link } from "react-router-dom";


function SeatCovers() {
  return (
    <div>
      <div className="interior-container">
        <div className="interior-section">
          <div className="interior-cards">
            {categoryApi[0].interiorItem[0].seatProduct.map((item, index) => (
              <Link to={"productInfo"} key={index}>
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatCovers;
