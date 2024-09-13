import React from "react";
import "../interior.scss";
import { CiHeart } from "react-icons/ci";
import categoryApi from "../../../../categoryApi/categoryApi";
import { FaRegHeart } from "react-icons/fa";

const data = categoryApi[0].interiorItem[1];

function FloorMats() {
  return (
    <div>
      <div className="interior">
        <div className="container">
          <section>
            <div className="interior-cards">
              {data.matProduct.map((item, index) => (
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
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FloorMats;
