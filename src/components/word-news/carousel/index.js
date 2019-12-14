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
        right: '0',
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
        right: '30px',
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
      rows: 2,
      slidesPerRow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            rows: 1,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 1,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <Slider {...settings}>
        <SlideItem>
          <p className="travel">TRAVEL</p>
          <p className="article">Article title</p>
          <p className="text">
            Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
            appareat…
          </p>
          <p className="time">2 min ago</p>
        </SlideItem>
        <SlideItem>
          <p className="travel">TRAVEL</p>
          <p className="article">Article title</p>
          <p className="text">
            Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
            appareat…
          </p>
          <p className="time">2 min ago</p>
        </SlideItem>
        <SlideItem>
          <p className="travel">TRAVEL</p>
          <p className="article">Article title</p>
          <p className="text">
            Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
            appareat…
          </p>
          <p className="time">2 min ago</p>
        </SlideItem>
        <SlideItem>
          <p className="travel">TRAVEL</p>
          <p className="article">Article title</p>
          <p className="text">
            Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has
            appareat…
          </p>
          <p className="time">2 min ago</p>
        </SlideItem>
      </Slider>
    )
  }
}
