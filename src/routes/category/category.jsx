import { useParams } from "react-router-dom";
import Categories from "../../components/categories";

const Category = () => {
    console.log(useParams());
  const { category }   = useParams();

  let content;
  switch (category) {
    case "Interior":
      content = <Categories />
      break;
    case "Exterior":
      content = <h1>Exterior</h1>;
      break;
    case "Comfort":
      content = <h1>Comfort</h1>;
      break;
    case "Electronics":
      content = <h1>Electronics</h1>;
      break;
    case "Utility":
      content = <h1>Utility</h1>;
      break;
    case "AboutUs":
      content = <h1>About us</h1>;
      break;
    case "WishList":
      content = <h1>Wishlist</h1>;
      break;
    default:
      content = <h1>Not Found</h1>;
  }

  return content;
};

export default Category;
