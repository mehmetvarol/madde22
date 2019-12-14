import styled from 'styled-components'
import media from '../../../util/media'

export const SlideItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 89% !important;
  ${media.xs`
      width:100% !important;
      margin-bottom: 40px;
    `}
  img {
    width: 100%;
    height: 180px;

    ${media.xs`
      /* width:300px; */
    `}
  }
  .pad {
    padding: 40px;
    .article {
      font-size: 16px;
      font-weight: 700;
      color: #202124;
      margin-bottom: 10px;
    }
    .text {
      font-size: 16px;
      color: #a6adb4;
      margin-bottom: 12px;
    }
    .time {
      font-size: 13px;
      font-style: oblique;
      line-height: 2;
      color: #a6adb4;
      position: relative;
      margin-left: 25px;
      &:before {
        position: absolute;
        width: 16px;
        height: 16px;
        content: '';
        background-image: url('./images/time.png');
        background-repeat: no-repeat;
        background-size: cover;
        top: 6px;
        left: -25px;
      }
    }
  }
`
