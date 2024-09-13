import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import categoryApi from "../../categoryApi/categoryApi";
import "./productInfo.scss";
import { CiHeart } from "react-icons/ci";

function ProductInfo() {
  //   const { id } = useParams(); // Get the product ID from URL parameters
  //   const [product, setProduct] = useState(null);

  //   useEffect(() => {
  //     // Fetch product details based on the ID
  //     const fetchProduct = () => {
  //       // Assuming categoryApi has a structure where you can get product details by ID
  //       const product = categoryApi[0].interiorItem[0].seatProduct.find(
  //         (p) => p.id === parseInt(id)
  //       );
  //       setProduct(product);
  //     };

  //     fetchProduct();
  //   }, [id]);

  //   if (!product) {
  //     return <div>Loading...</div>;
  //   }



  return (
    <div className="product-info-container">
      <div className="product-info">
        <div className="product-image">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> {product.prize}
          </p>
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="add-to-wishlist-button">
            <FaRegHeart className="addToWishlist" /> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
