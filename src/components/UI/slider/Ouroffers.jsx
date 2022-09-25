import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {    
   
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      
    };
    return (
      <div className="container ">
        
        <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div>
      <img src="burgeroffer.png" alt="avatar" className="slider" />
    </div>
    <div >
      <img src="Momooffer1.png" alt="avatar"className="slider"  />
    </div>
    <div >
      <img src="icecream.jpg" alt="" className="slider" />
    </div>
    <div >
      <img src="chickenoffer.jpg" alt="" className="slider" />
    </div>
    <div>
      <img src="biryanioffer.jpg" alt="avatar" className="slider" />
    </div>
    
    
           
        </Slider>
       
      </div>
    );
  }
}