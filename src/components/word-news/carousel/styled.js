import styled from 'styled-components'

export const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  .travel {
    margin-top: 40px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    color: #fa6980;
    margin-bottom: 20px;
  }
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
    line-height: 1.63;
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
