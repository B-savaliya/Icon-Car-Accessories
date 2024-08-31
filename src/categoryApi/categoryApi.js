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


const categoryApi = [
    {
        category: "Interior",
        path: "Interior",
        product: [
            { productcategory: "Seat Covers" },
            { productcategory: "Floor Mats" },
            { productcategory: "Steering Wheel Covers" },
            { productcategory: "Dashboard Covers" },
            { productcategory: "Sun Shades" },
        ],
        interiorItem: [
            { id: 111, img: seatImg1, title: "Venti 2 Perforated Art Leather Car Seat Cover ", prize: "Rs 12,480.00" },
            { id: 112, img: seatImg2, title: "Icee Perforated Fabric Car Seat Cover Black Grey Orange", prize: "from Rs. 10,140.00" },
            { id: 113, img: seatImg3, title: "Vogue Urban Plus Art Leather Car Seat Cover Black and Blue", prize: "Rs " },
            { id: 114, img: seatImg4, title: "", prize: "Rs " },
            { id: 115, img: seatImg5, title: "Posh Vegan Leather Car Seat Cover For Maruti Brezza", prize: "Rs. 18,360.00" },
            { id: 116, img: seatImg6, title: "Vogue Star Art Leather Car Seat Cover Black and Red", prize: "from Rs. 11,070.00" },
            { id: 117, img: seatImg7, title: "Victor Art Leather Car Seat Cover Black And Orange", prize: "from Rs. 10,250.00" },
            { id: 118, img: seatImg8, title: "Victor Duo Art Leather Car Seat Cover Black Cgrey Orange", prize: "from Rs. 10,250.00" },
            { id: 119, img: seatImg9, title: "Vogue Zap Plus Art Leather Car Seat Cover Black And Tan", prize: "from Rs. 8,430.00 " },
            { id: 120, img: seatImg10, title: "Yolo Fabric Car Seat Cover Design 1", prize: "from Rs. 3,300.00" },
            { id: 120, img: seatImg11, title: "Comfy Waves Fabric Car Seat Cover Grey & Black", prize: "from Rs. 8,000.00" },
            { id: 120, img: seatImg12, title: "Glory Prism Art Leather Car Seat Cover Black and Silver", prize: "from Rs. 11,620.00" },
            { id: 120, img: seatImg13, title: "Venti 2 Perforated Art Leather Car Seat Cover ", prize: "Rs 12,480.00" },
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
            { productcategory: "Spoilers and Body Kits" },
            { productcategory: "Custom Decals and Wraps" },
            { productcategory: "Bull Bars and Grille Guards" },
        ]
    },
    {
        category: "Comfort",
        path: "Comfort",
        product: [
            { productcategory: "Heated Seat Cushions" },
            { productcategory: "Massaging Seat Cushions" },
            { productcategory: "Cup Holders and IoFileTraySharp" },
            { productcategory: "Portable Fridges" }
        ]
    },
    {
        category: "Electronics",
        path: "Electronics",
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