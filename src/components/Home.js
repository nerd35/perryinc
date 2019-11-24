import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import banner from './images/14358167839.png';
import product1 from './images/product_image_1-1300-700x700.jpg';
import product2 from './images/product_image_24-1-600x518.jpg';
import product3 from './images/143556723756.png';
import product4 from './images/product_image_26-230-600x518.jpg';



const Home = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-5 col-sm-12 mt-5">
                        <h1 className="mt-5 text-info header-title">Perry INC</h1>
                        <h5 className=" mt-4 header-text">No 1 choice for used trucks and construction equipments. our deliverability speaks for itself</h5>
                        <div className="inline mt-4">
                            <NavLink to="/About" className="btn btn-lg btn-info border-0 shadow ml-3 mt-3" >WHO WE ARE</NavLink>
                            <NavLink to="/Service" className="btn btn-lg btn-info border-0 shadow ml-3 mt-3" >WHAT WE DO</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <img src={banner} className="mt-5 banner-pix" alt="banner" />
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 class="category-title mt-3">Categories</h3>
                <div className="row mt-2 mb-4">
                    <div className="col-lg-3 col-sm-6 mt-2  ">
                        <img src={product1} alt="product1" className="product-image" />
                        <NavLink to="/Service" className="product-link text-center mb-5 ml-3">Articulating Lifts</NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2  ">
                        <img src={product2} alt="product1" className="product-image" />
                        <NavLink to="/Service" className="product-link text-center mb-5 ml-3">Earthmoving equip..</NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-3 ">
                        <img src={product3} alt="product1" className="product-image mt-4" />
                        <NavLink to="/Service" className="product-link  mb-5 ml-3 ">Construction truck</NavLink>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2 ">
                        <img src={product4} alt="product1" className="product-image" />
                        <NavLink to="/Service" className="product-link text-center mb-5">Compaction equip</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;