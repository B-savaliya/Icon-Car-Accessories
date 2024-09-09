import { useParams } from "react-router-dom";
import Categories from "../../components/categories";
import SeatCovers from "../../components/categories/interior/seatCovers";
import FloorMats from "../../components/categories/interior/floorMats";
import SteeringWheelCover from "../../components/categories/interior/SteeringWheelCover";
import InValidPage from "../../common/errorPage";
import DelayLoader from "../../common/loader/delayLoader/delayLoader";
import ProductInformation from "../../components/product-info";

const Category = () => {
  console.log(useParams());
  const { category } = useParams();

  let content;
  switch (category) {
    case "productInfo":
      content = (
        <DelayLoader>
          <ProductInformation />;
        </DelayLoader>
      );
      break;
    case "Interior":
      content = (
        <DelayLoader>
          <Categories />;
        </DelayLoader>
      );
      break;
    case "Seat-Covers":
      content = (
        <DelayLoader>
          <SeatCovers />;
        </DelayLoader>
      );
      break;
    case "Floor-Mats":
      content = (
        <DelayLoader>
          <FloorMats />;
        </DelayLoader>
      );
      break;
    case "Steering-Wheel-Covers":
      content = (
        <DelayLoader>
          <SteeringWheelCover />;
        </DelayLoader>
      );
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
      content = <InValidPage />;
  }

  return content;
};

export default Category;
