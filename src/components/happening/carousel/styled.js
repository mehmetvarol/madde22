import styled from 'styled-components'
import media from '../../../util/media'

export const Flex = styled.div`
  display: flex;
`
export const SlideSmallCard = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 210px;
    border-radius: 5px;
  }
  .pad {
    padding: 15px 0px;
    .article {
      font-size: 16px;
      font-weight: 700;
      color: #202124;
      margin-bottom: 10px;
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

export const SlideItem = styled.div`
  margin-bottom: 40px;
  ${media.xs`
      width:100% !important;
      margin-bottom: 20px;
    `}

  .happening-card {
    width: 100% !important;
    height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;

    &.card1 {
      background-image: url('./images/happening-card1.png');
    }

    &.card2 {
      background-image: url('./images/happening-card2.png');
    }
  }

  .city {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  .city-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
  }
  .city-text {
    font-size: 16px;
    line-height: 1.63;
    color: #fff;
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
`
