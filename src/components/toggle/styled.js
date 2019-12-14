import styled from 'styled-components'

export const StyledBurger = styled.button`
  position: absolute;
  top: 26.5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  padding: 5px;

  &:focus {
    outline: none;
  }

  div {
    width: 1rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#0D0C1D')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      height: 0.12rem;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
      width: 0.5rem;
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #f6f8f9;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  @media (max-width: 576px) {
    width: 90%;
  }

  a {
    &:first-child {
      font-size: 13px;
      /* position:absolute; */
      color: #fa6980;
      top: 40px;
    }
    font-size: 2rem;
    text-transform: uppercase;
    padding: 20px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #a6adb4;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 11px;
      text-align: left;
      margin-left: 40px;
      &:hover {
        color: #343638;
      }
    }
  }
  span {
    margin-right: 30px;
  }
`

export const MobileFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 310px;
  background-color: #a6adb4;
  flex-direction:column;
  justify-content:center;

  div {
  display: flex;
  flex-direction:row;

    ul {
      margin-right: 20px !important;
      li {
        margin-bottom: 30px;
        a {
          text-decoration: none;
          cursor: pointer !important;
          font-size: 11px !important;
          color: #ebeded !important;
          letter-spacing: 1px;
        }
      }
    }
  }
  .social {
    ul {
      display: flex;
      li {
        margin-top: 40px;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
        a {
          img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
`
