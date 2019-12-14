import React, { Component } from 'react'
import Slider from 'react-slick'
import { SlideItem } from './styled'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: "url('./images/arrow.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: 'absolute',
        top: '-45px',
        right: '0px',
        width: '6px'
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: "url('./images/arrow.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        transform: 'rotate(180deg)',
        position: 'absolute',
        top: '-65px',
        right: '45px',
        left: 'initial',
        width: '6px'
      }}
      onClick={onClick}
    />
  )
}
export default class Carousel extends Component {
  render() {
    var settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 2,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <Slider {...settings}>
        <SlideItem>
          <img src="./images/card1.png" alt="card1" />
          <div className="pad">
            <p className="article">Dolore magna aliqua</p>
            <p className="text">
              Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
              appareat…
            </p>
            <p className="time">2 min ago</p>
          </div>
        </SlideItem>
        <SlideItem>
          <img src="./images/card2.png" alt="card2" />
          <div className="pad">
            <p className="article">Morbi eleifend a libero</p>
            <p className="text">
              Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
              appareat…
            </p>
            <p className="time">2 min ago</p>
          </div>
        </SlideItem>
        <SlideItem>
          <img src="./images/card3.png" alt="card3" />
          <div className="pad">
            <p className="article">Morbi eleifend a libero</p>
            <p className="text">
              Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
              appareat…
            </p>
            <p className="time">2 min ago</p>
          </div>
        </SlideItem>
        <SlideItem>
          <img src="./images/card1.png" alt="card1" />
          <div className="pad">
            <p className="article">Dolore magna aliqua</p>
            <p className="text">
              Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
              appareat…
            </p>
            <p className="time">2 min ago</p>
          </div>
        </SlideItem>
        <SlideItem>
          <img src="./images/card2.png" alt="card2" />
          <div className="pad">
            <p className="article">Morbi eleifend a libero</p>
            <p className="text">
              Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
              appareat…
            </p>
            <p className="time">2 min ago</p>
          </div>
        </SlideItem>
        <SlideItem>
          <img src="./images/card3.png" alt="card3" />
          <div className="pad">
            <p className="article">Morbi eleifend a libero</p>
            <p className="text">
              Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
              appareat…
            </p>
            <p className="time">2 min ago</p>
          </div>
        </SlideItem>
      </Slider>
    )
  }
}
