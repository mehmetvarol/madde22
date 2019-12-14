import React, { Component } from 'react'
import { News, BannerWrapper, Line, Col } from './styled'
import Carousel from './carousel'

export default class WordNews extends Component {
  render() {
    return (
      <div className="container-full">
        <div className="row no-gutters">
          <div className="col-lg-7 col-md-12">
            <BannerWrapper>
              <p>WORLD NEWS</p>
              <div className="line"></div>
              <p>Amazing places in America to visit.</p>
              <p className="sub-text">
                For some reason — this country, this city, this neighborhood,
                this particular street —  is the place you are living a majority
                of your life in.
              </p>
              <button>learn more</button>
            </BannerWrapper>
          </div>
          <div className="col-lg-5 col-md-12">
            <Col>
              <News>MORE NEWS</News>
              <Line></Line>
              <Carousel />
            </Col>
          </div>
        </div>
      </div>
    )
  }
}
