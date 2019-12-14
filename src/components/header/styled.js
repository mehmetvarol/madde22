import styled from 'styled-components'
import media from '../../util/media'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  background-color: #f6f8f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  div {
    display: flex;
    align-items: center;
  }
  ${media.sm`
    position: fixed;
    top: 0;
    z-index: 8;
  `}
`

export const MenuIcon = styled.button`
  display:none;  
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }

  img {
    width: 16px;
    height: 16px;
  }
  ${media.xs`
    display:block;
  `}
`

export const Logo = styled.a`
  font-size: 13px;
  color: #fa6980;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #fa6980;
  }
  ${media.sm`
    
  `}
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  li {
    text-transform: uppercase;
    margin-right: 25px;
    font-size: 11px;
    font-weight: 700;

    a {
      text-decoration: none;
      color: #a6adb4;
      &:hover {
        color: #202124;
      }
    }
  }
  ${media.xs`
    display:none;
  `}
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-fit: contain;
`
