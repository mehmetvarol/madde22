import React, { Component } from 'react'
import { Main } from './styled'
import Carousel from './carousel'

export default class Trending extends Component {
  render() {
    return (
      <Main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="trend">TRENDING</p>
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}
