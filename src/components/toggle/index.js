import React from 'react'
import { StyledMenu, StyledBurger, MobileFooter } from './styled'
import { Avatar, Logo } from '../header/styled'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Logo href="/">LOGO</Logo>
      <a href="/">
        <span role="img" aria-label="Home">
          💁🏻‍♂️
        </span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="Discovery">
          💸
        </span>
        Discovery
      </a>
      <a href="/">
        <span role="img" aria-label="photos">
          🏞
        </span>
        Photos
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          📩
        </span>
        Contact
      </a>
      <a href="/">
        <span role="img" aria-label="profile">
          <Avatar src="./images/avatar.png"></Avatar>
        </span>
        Profile
      </a>
      <MobileFooter>
        <div>
          <ul>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">HELP</a>
            </li>
            <li>
              <a href="/">TERMS</a>
            </li>
            <li>
              <a href="/">GUIDLINES</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">TESTIMONIALS</a>
            </li>
            <li>
              <a href="/">ADVERTISE</a>
            </li>
            <li>
              <a href="/">TERMS</a>
            </li>
            <li>
              <a href="/">CAREERS</a>
            </li>
          </ul>
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
      </MobileFooter>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Hamburger = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default Hamburger
