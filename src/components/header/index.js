import React, { Component } from 'react'
import { HeaderWrapper, Logo, Menu, Avatar, MenuIcon} from './styled'
import Hamburger from '../toggle'

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <MenuIcon>
        <Hamburger/>  
        </MenuIcon>
        <Logo href="/">LOGO</Logo>
        <div>
          <Menu>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/">discovery</a>
            </li>
            <li>
              <a href="/">photos</a>
            </li>
            <li>
              <a href="/">contact</a>
            </li>
          </Menu>
          <Avatar src="./images/avatar.png" />
        </div>
      </HeaderWrapper>
    )
  }
}
