import React from "react";
import "./interior.scss";
import seatImg from "../../../assets/images/12_7d1ea395-0f43-4532-a0b3-3c5feb90ec49_280x315@2x.jpg";
import { CiHeart } from "react-icons/ci";
import categoryApi from "../../../categoryApi/categoryApi";

const data = categoryApi;

function Interior() {
  return (
    <>
      <div className="interior-container">
        <div className="interior-section">
          <div className="interior-cards">
            {data[0].interiorItem.map((item, index) => (
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
    </>
  );
}

export default Interior;

{
  /* <div className="card">
<div className="card-img">
  <img src={seatImg} />
</div>
<div className="card-detailes">
  <div className="card-title">
    <p>
      Venti 2 Perforated Art Leather Car Seat Cover For Honda
      Amaze
    </p>
  </div>
  <div className="product-price">
    <p>Rs. 12,480.00</p>
  </div>
  <div className="product-buy">
    <div>
      <button>add to cart</button>
    </div>
    <div className="wishlist">
      <CiHeart className="addToWishlist" />
    </div>
  </div>
</div> */
}
