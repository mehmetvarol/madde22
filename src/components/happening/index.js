import React, { Component } from 'react'
import { Main } from './styled'
import Carousel from './carousel'

export default class Happening extends Component {
  render() {
    return (
      <Main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="happening-now">HAPPENING NOW</p>
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}
