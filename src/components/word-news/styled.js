import styled from 'styled-components'
import media from '../../util/media'

export const BannerWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  background: url('./images/banner.png') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  ${media.xs`
    padding: 0% 7%;  
  `}
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.75;
    color: #fff;

    &.sub-text {
      width: 80%;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 30px;
    }
  }
  .line {
    height: 2px;
    width: 80%;
    background-color: #fff;
    margin: 40px 0;
    ${media.xs`
    width: 100%;
  `}
  }
  button {
    background-color: #fa6980;
    padding: 16px 30px;
    text-transform: uppercase;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 11px;
  }
`
export const News = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 0.83;
  color: #202124;
  margin-bottom: 40px;
`
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f6f8f9;
`
export const Col = styled.div`
  padding: 9% 26%;
  ${media.xs`
    padding: 9% 5%;  
  `}

  ${media.md`
    padding: 5% 3%;  
  `}
`
