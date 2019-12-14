import React, { Component } from 'react'
import Slider from 'react-slick'
import { SlideItem, SlideSmallCard, Flex } from './styled'

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
        width: '6px',
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
      slidesToShow: 1,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <Slider {...settings}>
        <div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <SlideItem>
                <div className="happening-card card1">
                  <div className="city">CITY</div>
                  <div>
                    <p className="city-title">Large article title</p>
                    <p className="city-text">
                      Lorem ipsum dolor sit amet, in eam odio amet, vix id
                      nullam detracto, vidit vituperatoribus duo id. Affert
                      detraxit voluptatum vis eu, inermis eloquentiam.
                    </p>
                    <p className="time">2 min ago</p>
                  </div>
                </div>
              </SlideItem>
              <SlideItem>
                <div className="happening-card card2">
                <div className="city">TRAVEL</div>
                  <div>
                    <p className="city-title">Large article title</p>
                    <p className="city-text">
                      Lorem ipsum dolor sit amet, in eam odio amet, vix id
                      nullam detracto, vidit vituperatoribus duo id. Affert
                      detraxit voluptatum vis eu, inermis eloquentiam.
                    </p>
                    <p className="time">2 min ago</p>
                  </div>
                </div>
              </SlideItem>
            </div>
            <div className="col-lg-4 col-md-12">
              <SlideSmallCard>
                <img
                  className="happening-card3"
                  src="./images/happening-card3.png"
                  alt="card3"
                />
                <div className="pad">
                  <p className="article">Morbi eleifend a libero</p>
                  <p className="time">2 min ago</p>
                </div>
              </SlideSmallCard>
              <SlideSmallCard>
                <img
                  className="happening-card4"
                  src="./images/happening-card4.png"
                  alt="card3"
                />
                <div className="pad">
                  <p className="article">Morbi eleifend a libero</p>
                  <p className="time">2 min ago</p>
                </div>
              </SlideSmallCard>
              <SlideSmallCard>
                <img
                  className="happening-card5"
                  src="./images/happening-card5.png"
                  alt="card3"
                />
                <div className="pad">
                  <p className="article">Morbi eleifend a libero</p>
                  <p className="time">2 min ago</p>
                </div>
              </SlideSmallCard>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <SlideItem>
                <div className="happening-card card1">
                  <div className="city">CITY</div>
                  <div>
                    <p className="city-title">Large article title</p>
                    <p className="city-text">
                      Lorem ipsum dolor sit amet, in eam odio amet, vix id
                      nullam detracto, vidit vituperatoribus duo id. Affert
                      detraxit voluptatum vis eu, inermis eloquentiam.
                    </p>
                    <p className="time">2 min ago</p>
                  </div>
                </div>
              </SlideItem>
              <SlideItem>
                <div className="happening-card card2">
                <div className="city">TRAVEL</div>
                  <div>
                    <p className="city-title">Large article title</p>
                    <p className="city-text">
                      Lorem ipsum dolor sit amet, in eam odio amet, vix id
                      nullam detracto, vidit vituperatoribus duo id. Affert
                      detraxit voluptatum vis eu, inermis eloquentiam.
                    </p>
                    <p className="time">2 min ago</p>
                  </div>
                </div>
              </SlideItem>
            </div>
            <div className="col-lg-4 col-md-12">
              <SlideSmallCard>
                <img
                  className="happening-card3"
                  src="./images/happening-card3.png"
                  alt="card3"
                />
                <div className="pad">
                  <p className="article">Morbi eleifend a libero</p>
                  <p className="time">2 min ago</p>
                </div>
              </SlideSmallCard>
              <SlideSmallCard>
                <img
                  className="happening-card4"
                  src="./images/happening-card4.png"
                  alt="card3"
                />
                <div className="pad">
                  <p className="article">Morbi eleifend a libero</p>
                  <p className="time">2 min ago</p>
                </div>
              </SlideSmallCard>
              <SlideSmallCard>
                <img
                  className="happening-card5"
                  src="./images/happening-card5.png"
                  alt="card3"
                />
                <div className="pad">
                  <p className="article">Morbi eleifend a libero</p>
                  <p className="time">2 min ago</p>
                </div>
              </SlideSmallCard>
            </div>
          </div>
        </div>


      </Slider>
    )
  }
}
