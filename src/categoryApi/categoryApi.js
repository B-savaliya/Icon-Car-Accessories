import { v4 as uuidv4 } from "uuid";
import seatImg1 from "../assets/images/12_7d1ea395-0f43-4532-a0b3-3c5feb90ec49_280x315@2x.jpg"
import seatImg2 from "../assets/images/4_1cab3e3e-9308-4f39-8e1d-6e49e42cf2a3_280x315@2x.jpg"
import seatImg3 from "../assets/images/new 1.webp"
import seatImg4 from "../assets/images/new 2.webp"
import seatImg5 from "../assets/images/poshtan2_23e63960-3a5a-46ab-817f-b6e6923ee61f_280x315@2x.jpg"
import seatImg6 from "../assets/images/Trend-star-black-red_280x315@2x.jpg";
import seatImg7 from "../assets/images/victorblack_280x315@2x.jpg";
import seatImg8 from "../assets/images/victorduoblack_280x315@2x.jpg";
import seatImg9 from "../assets/images/2_ad1e8f6d-014c-4261-a923-5a5fedcbd1b6_280x315@2x.jpg";
import seatImg10 from "../assets/images/1_15caa39c-a224-477b-9810-dd78833b3c05_280x315@2x.jpg";
import seatImg11 from "../assets/images/comfy_266f3125-2af6-4592-bf5c-57300426ab35_280x315@2x.jpg";
import seatImg12 from "../assets/images/Gloryprismblack_Silver_466283e8-3dc8-4f35-93e3-ca12b6405077_280x315@2x.jpg";
import seatImg13 from "../assets/images/new 3.webp";
import seatImg14 from "../assets/images/new4.webp";
import seatImg15 from "../assets/images/new5.webp";
import floorMatImg1 from "../assets/images/floor mat (1).jpg";
import floorMatImg2 from "../assets/images/floor mat (2).jpg";
import floorMatImg3 from "../assets/images/floor mat (3).jpg";
import floorMatImg4 from "../assets/images/floor mat (4).jpg";
import floorMatImg5 from "../assets/images/floor mat (5).jpg";
import floorMatImg6 from "../assets/images/floor mat (6).jpg";
import floorMatImg7 from "../assets/images/floor mat (7).jpg";
import floorMatImg8 from "../assets/images/floor mat (8).jpg";
import floorMatImg9 from "../assets/images/floor mat (9).jpg";
import floorMatImg10 from "../assets/images/floor mat (10).jpg";
import floorMatImg11 from "../assets/images/floor mat (11).jpg";
import steeringWheel1 from "../assets/images/sterringwheel (1).jpg";
import steeringWheel2 from "../assets/images/sterringwheel (2).jpg";
import steeringWheel3 from "../assets/images/sterringwheel (3).jpg";
import steeringWheel4 from "../assets/images/sterringwheel (4).jpg";
import steeringWheel5 from "../assets/images/sterringwheel (5).jpg";
import steeringWheel6 from "../assets/images/sterringwheel (6).jpg";
import steeringWheel7 from "../assets/images/sterringwheel (7).jpg";
import steeringWheel8 from "../assets/images/sterringwheel (8).jpg";
import steeringWheel9 from "../assets/images/sterringwheel (9).jpg";
import steeringWheel10 from "../assets/images/sterringwheel (10).jpg";



const categoryApi = [
    {
        category: "Interior",
        path: "Interior",
        product: [
            { productcategory: "Seat Covers", path: "/Seat-Covers" },
            { productcategory: "Floor Mats", path: "Floor-Mats" },
            { productcategory: "Steering Wheel Covers", path: "Steering-Wheel-Covers" },
        ],
        interiorItem: [
            {
                interiorCategory: "Seat Covers",
                path: "Seat-Covers",
                seatProduct: [
                    { objectId: uuidv4(), img: seatImg1, title: "Venti 2 Perforated Art ather Car Seat Cover ", prize: "Rs 12,480.00" },
                    { objectId: uuidv4(), img: seatImg2, title: "Icee Perforated Fabric Car Seat Cover Black Grey Orange", prize: "from Rs. 10,140.00" },
                    { objectId: uuidv4(), img: seatImg3, title: "Vogue Urban Plus Art ather Car Seat Cover Black and Blue", prize: "from Rs. 8,430.00" },
                    { objectId: uuidv4(), img: seatImg4, title: "Emperor Velvet Fabric Car Seat Cover Beige", prize: "from Rs. 14,710.00" },
                    { objectId: uuidv4(), img: seatImg5, title: "Posh Vegan Leather Car Seat Cover For Maruti Brezza", prize: "Rs. 18,360.00" },
                    { objectId: uuidv4(), img: seatImg6, title: "Vogue Star Art Leather Car Seat Cover Black and Red", prize: "from Rs. 11,070.00" },
                    { objectId: uuidv4(), img: seatImg7, title: "Victor Art Leather Car Seat Cover Black And Orange", prize: "from Rs. 10,250.00" },
                    { objectId: uuidv4(), img: seatImg8, title: "Victor Duo Art Leather Car Seat Cover Black Cgrey Orange", prize: "from Rs. 10,250.00" },
                    { objectId: uuidv4(), img: seatImg9, title: "Vogue Zap Plus Art Leather Car Seat Cover Black And Tan", prize: "from Rs. 8,430.00 " },
                    { objectId: uuidv4(), img: seatImg10, title: "Yolo Fabric Car Seat Cover Design Black & White ", prize: "from Rs. 3,300.00" },
                    { objectId: uuidv4(), img: seatImg11, title: "Comfy Waves Fabric Car Seat Cover Grey & Black", prize: "from Rs. 8,000.00" },
                    { objectId: uuidv4(), img: seatImg12, title: "Glory Prism Art Leather Car Seat Cover Black and Silver", prize: "from Rs. 11,620.00" },
                    { objectId: uuidv4(), img: seatImg13, title: "Venti 2 Perforated Art Leather Car Seat Cover ", prize: "Rs 12,480.00" },
                    { objectId: uuidv4(), img: seatImg14, title: "Vogue Star Art Leather Car Seat Cover Black and Silver", prize: "from Rs. 11,070.00" },
                    { objectId: uuidv4(), img: seatImg15, title: "Vogue Knight Art Leather Car Seat Cover Black and Yellow", prize: "from Rs. 11,070.00" },
                ]
            },
            {
                interiorCategory: "Floor Mats",
                path: "Floor-Mats",
                matProduct: [
                    { id: 125, img: floorMatImg1, title: "Premium Double Stiching Car Trunk/Boot/Dicky Mat for Car", prize: "Rs. 1,799" },
                    { id: 126, img: floorMatImg2, title: "Car Universal Grass Mats in Grey and Black For All Cars", prize: "Rs. 1,499" },
                    { id: 127, img: floorMatImg3, title: "Car Universal Grass Mats in Coffee For All Cars ", prize: "Rs. 1,499" },
                    { id: 128, img: floorMatImg4, title: "Car Universal Grass Mats in Beige For All Cars ", prize: "Rs. 1,499" },
                    { id: 129, img: floorMatImg5, title: "8D Car Floor Mats In Red For All Cars Leather", prize: "Rs. 3,999" },
                    { id: 130, img: floorMatImg6, title: "8D Car Floor Mats In Black For All Cars Leather ", prize: "Rs. 3,999" },
                    { id: 131, img: floorMatImg7, title: "8D Car Floor Mats In Black and Tan For All cars", prize: "Rs. 3,999" },
                    { id: 132, img: floorMatImg8, title: "8D Car Floor Mats In Black and Silver For All Cars", prize: "Rs. 3,999" },
                    { id: 133, img: floorMatImg9, title: "Premium 8D Car Floor Mats In Beige For All Cars ", prize: "Rs. 3,999" },
                    { id: 134, img: floorMatImg10, title: "Premium 7D Car Floor Mats In Black For All Cars ", prize: "Rs. 3,999" },
                    { id: 135, img: floorMatImg11, title: "Premium 7D Car Floor Mats In Beige For All Cars ", prize: "Rs. 3,999" },
                ]
            },
            {
                interiorCategory: "Steering Wheel Covers",
                path: "Steering-Wheel-Covers",
                wheelProduct: [
                    { id: 136, img: steeringWheel1, title: "Sporty Design Car Steering Wheel Cover Black and Red", prize: "Rs. 459.00" },
                    { id: 137, img: steeringWheel2, title: "Perfect Grip Design Car Steering Wheel Cover Grey and Black", prize: "Rs. 459.00" },
                    { id: 138, img: steeringWheel3, title: "Perfect Grip Design Car Steering Cover Full Black", prize: "Rs. 459.00" },
                    { id: 139, img: steeringWheel4, title: "Perfect Grip Design Car Steering Cover In Black", prize: "Rs. 359.00" },
                    { id: 140, img: steeringWheel5, title: "Perfect Grip Design Car Steering Wheel Cover Black and Beige", prize: "Rs. 559.00" },
                    { id: 141, img: steeringWheel6, title: "Perfect Grip Design Car Steering Wheel Black and Brown", prize: "Rs. 599.00" },
                    { id: 142, img: steeringWheel7, title: "Perfect Grip Design Car Steering Wheel Black and Beige premium", prize: "Rs. 559.00" },
                    { id: 143, img: steeringWheel8, title: "Car Steering Wheel Cover In Beige and Black – Classy Neo Design", prize: "Rs. 559.00" },
                    { id: 144, img: steeringWheel9, title: "Black and Beige Steering Wheel Cover Classy Design", prize: "Rs. 359.00" },
                    { id: 145, img: steeringWheel10, title: " Superb Design Car Steering Cover Full Black Premium", prize: "Rs. 559.00" },
                ]
            },
        ]
    },
    {
        category: "Exterior",
        path: "Exterior",
        product: [
            { productcategory: "Car Covers" },
            { productcategory: "Chrome Trims" },
            { productcategory: "Window Tint Film" },
            { productcategory: "Roof Racks and Carriers" },
            { productcategory: "License Plate Frames" },
            { productcategory: "Mud Flaps" },
            { productcategory: "Spoirs and Body Kits" },
            { productcategory: "Custom Decals and Wraps" },
            { productcategory: "Bull Bars and Gril Guards" },
        ]
    },
    {
        category: "Comfort",
        path: "Comfort",
        product: [
            { productcategory: "Heated Seat Cushions" },
            { productcategory: "Massaging Seat Cushions" },
            { productcategory: "Cup Holders and IoFiTraySharp" },
            { productcategory: "Portab Fridges" }
        ]
    },
    {
        category: "Ectronics",
        path: "Ectronics",
        product: [
            { productcategory: "Stereos" },
            { productcategory: "Speakers and Subwoofers" },
            { productcategory: "Subwoofers" },
            { productcategory: "Amplifiers" },
            { productcategory: "Dash Cameras" },
            { productcategory: "GPS Navigation Systems" },
            { productcategory: "Backup Cameras" },
            { productcategory: "Car Alarms and Security Systems" },
            { productcategory: "Remote Starters" },
            { productcategory: "Bluetooth Adapters" },
            { productcategory: "GPS Navigation Systems" },
        ]
    },
    {
        category: "Utility",
        path: "Utility",
        product: [
            { productcategory: "jump starters" },
            { productcategory: "Battery Chargers" },
            { productcategory: "Tool Kits" },
            { productcategory: "Tire Pressure Gauges" },
            { productcategory: "Snow Chains" },
            { productcategory: "Tow Straps" },
            { productcategory: "Emergency Roadside Kits" }
        ]
    },
    {
        category: "About Us",
        path: "AboutUs",
        product: []
    }
]

export default categoryApi