import styled from 'styled-components'
import Bg from "../../Assets/image/congrats-bg.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import map from 'lodash/map'
import { get } from 'lodash'
import RoundBtn from '../Button/RoundBtn'
import { customColor } from '../../Config/Color'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

const StyledContainer = styled.div`
  background: url('${Bg}');
  min-height: 100vh;
  background-size: 150vw auto;
  background-repeat: no-repeat;
  background-position: top center;
  margin: 0 -20px;
  @media (min-width: 900px) {
    background-size: 80vw auto;
  }
`

const StyledCongrats = styled.div`
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    color: ${customColor.textColor02};
    @media (min-width: 900px) {
      padding-top: 185px;
    }
  `

const StyledNftItem = styled.div`
`

const StyledNftID = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding-top: 12px;
  @media (min-width: 900px) {
    font-size: 26px;
    line-height: 31px;
    font-weight: 600;
  }
`

const StyledBtnWrapper = styled.div`
  margin: auto;
  padding-top: 33px;
  width: 208px;
  a {
    text-decoration: none;
  }
`

const StyledBtnText = styled.div`
  padding: 12px 20px;
  font-size: 14px;
`

const StyledSliderWrapper = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding-top: 56px;
  @media (min-width: 900px) {
    padding-top: 39px;
    width: 100%;
  }
`

const StyledImageWrapper = styled.div`
  @media (min-width: 900px) {
    width: 300px;
  }
`

const Nft = (props) => {
  const { nftData, siteCopy } = props
  const detectViewport = () => {
    return window.innerWidth >= 900 ? 'desktop' : 'mobile'
  }
  const [viewport, setViewport] = useState(detectViewport())

  const settings = {
    dots: false,
    infinite: false,
    variableWidth: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // centerPadding: '60px',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '60px',
          centerMode: true,
          variableWidth: false,
        }
      },
    ]
  }

  const list = map(nftData, (item, key) => {
    return (
      <StyledNftItem key={`nft-${key}`}>
        <div style={{padding: '0 20px'}}>
            {get(item, 'images[0]') && (
              <StyledImageWrapper><img src={item.images[0]} width="100%" alt="" /></StyledImageWrapper>
            )}
            <StyledNftID>{item.nftID}</StyledNftID>
          </div>
      </StyledNftItem>
    )
  })

  const changeViewport = () => {
    setViewport(detectViewport())
  }

  useEffect(() => {
    window.addEventListener('resize', changeViewport)
    return () => {
      window.removeEventListener('resize', changeViewport)
    }
  }, [])

  return (
    <StyledContainer>
      <StyledCongrats>{siteCopy.congrats}</StyledCongrats>
      <StyledSliderWrapper>
        <Slider {...settings}>
          {viewport === 'desktop' && (
            <div>
              {nftData.length > 1 && (
                <div style={{width: 'calc(50vw - 300px - 40px)'}} />
              )}

              {nftData.length === 1 && (
                <div style={{width: `calc(50vw - 150px - 20px)`}} >a</div>
              )}
              
            </div>
          )}
          {list}
        </Slider>
      </StyledSliderWrapper>

      <StyledBtnWrapper>
        <Link to="/myNFT">
          <RoundBtn>
            <StyledBtnText>
              {siteCopy.goToMyCollection}
            </StyledBtnText>
          </RoundBtn>
        </Link>
      </StyledBtnWrapper>
    </StyledContainer>
  )
}

export default Nft