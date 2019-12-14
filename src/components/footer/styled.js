import styled from 'styled-components'
import media from '../../util/media'

export const FooterArea = styled.div`
  background-color: #a6adb4;
  width: 100%;
  min-height: 200px;
  ${media.sm`
    display:none;
  `}

  .row {
    .footer {
      display: flex;
      margin-top: 50px;
      justify-content: space-between;
      flex: 1;
      padding: 0 15px;
      ${media.md`
        flex-wrap:wrap;
      `}
    }
    .footer-logo {
      font-size: 13px;
      font-weight: 700;
      line-height: 1.54;
      a {
        text-decoration: none;
        color: #fff;
      }
      ${media.md`
        flex-basis: 20%;
      `}
    }
    .footer-text {
      display: flex;
      ul {
        margin-right: 60px;
        li {
          a {
            font-size: 13px;
            font-weight: 700;
            line-height: 1.54;
            color: #cbd0d3;
          }
        }
      }
      ${media.md`
        margin-bottom: 40px;
      `}
    }
    .send {
      position: relative;
      input {
        background-color: #a6adb4;
        outline: none;
        padding: 10px 0 10px 20px;
        font-size: 13px;
        opacity: 0.5;
        width: 260px;
        border-radius: 6px;
        border: 1px solid #cbd0d3;
        box-sizing: border-box;
        transition: 0.5s ease all;
        &::placeholder {
          color: #cbd0d3;
        }
      }
      input[type='text']:focus {
        outline: none;
        border-color: #fff;
      }

      button {
        position: absolute;
        top: 12px;
        right: 15px;
        outline: none;
        border: none;
        background-color: #a6adb4;
        cursor:pointer;
        img {
          width: 16px;
          height: 16px;
        }
      }
      p {
        margin-top: 16px;
        font-size: 11px;
        line-height: 1.82;
        color: #cbd0d3;
      }
    }
    .social {
      ul {
        display: flex;
        li {
          margin-right: 30px;
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
  }
`
