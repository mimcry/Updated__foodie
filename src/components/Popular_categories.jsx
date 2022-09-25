import React, { Component } from "react";
import Slider from "react-slick";

export default class Rtl extends Component {
  render() {
    const settings = {
  
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true,
    };
    return (
      <div className="popularcategories ">
        <h2 className="popularfood"> <span className="popular" >Popular</span> Food  </h2>
        <p>We serve better & faster</p>
        <Slider {...settings}>
         <div className="pop"> <img
src="product1.1.jpg"
alt=""
className="popularslider"
/>  <button className="button" >
            Add to Cart
          </button>
</div>
<div className="pop"> <img
src="product01.jpg"
alt=""
className="popularslider"
/>  <button className="button" >
            Add to Cart
          </button>
</div>
<div className="pop"> <img
src="cmomo.png"
alt="cmomo"
className="popularslider"
/>  <button className="button" >
            Add to Cart
          </button>
</div>
<div className="pop"> <img
src="khajaset.png"
alt=""
className="popularslider"
/>  <button className="button" >
            Add to Cart
          </button>
</div>
<div className="pop"> <img
src="momo.png"
alt=""
className="popularslider"
/>  <button className="button" >
            Add to Cart
          </button>
</div>
<div className="pop"> <img
src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&w=1000&q=80"
alt=""
className="popularslider"
/>  <button className="button" >
            Add to Cart
          </button>
</div >

        </Slider>
      
      </div>
    );
  }
}
