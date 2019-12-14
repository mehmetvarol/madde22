import React, { Component } from 'react'
import { FooterArea } from './styled'

export default class Footer extends Component {
  render() {
    return (
      <FooterArea>
        <div className="container">
          <div className="row">
            <div className="footer">
              <div className="footer-logo"><a href="/">LOGO</a></div>
              <div className="footer-text">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Discovery</a>
                  </li>
                  <li>
                    <a href="/">Photos</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Profile</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Discovery</a>
                  </li>
                  <li>
                    <a href="/">Photos</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Profile</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Discovery</a>
                  </li>
                  <li>
                    <a href="/">Photos</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Profile</a>
                  </li>
                </ul>
              </div>
              <div className="send">
                <input
                  type="text"
                  id="send"
                  name="send"
                  placeholder="Email"
                />
                <button><img src="./images/send.png" alt=""/></button>
                <p>Stay in touch with us for the freshest products!</p>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href="/">
                      <img src="./images/instagram.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="./images/twitter.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="./images/facebook.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="./images/web.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FooterArea>
    )
  }
}
