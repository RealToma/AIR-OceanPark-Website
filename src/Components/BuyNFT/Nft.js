import styled from 'styled-components'
import Bg from "../../Assets/image/congrats-bg.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import map from 'lodash/map'
import { get } from 'lodash'
import RoundBtn from '../Button/RoundBtn'
import { customColor } from '../../Config/Color'
import { red } from '@mui/material/colors'

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
  width: 178px;
`

const StyledBtnText = styled.div`
  padding: 12px 20px;
  font-size: 14px;
`

const StyledSliderWrapper = styled.div`
border: 1px solid red;
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding-top: 56px;
  @media (min-width: 900px) {
    padding-top: 39px;
  }
`

const Nft = (props) => {
  // const { nftData } = props
  const ntfData =[
    {
      "_id": "632ed3dcedbc649a2d15a186",
      "valid": true,
      "images": [
          "https://mkf-air-storage.s3.ap-southeast-1.amazonaws.com/OPNFT_2460_4b0c6bedcf.png"
      ],
      "ownerAddress": "",
      "sequence": 2,
      "collectionName": "op_halloween2022",
      "data": {
          "strength": 1,
          "endurance": 1,
          "intelligence": 1,
          "spirit": 1,
          "perception": 1,
          "dexterity": 1
      },
      "name": "testing02",
      "chainName": "solana",
      "mintAddress": "11223345",
      "nftID": "002",
      "type": "normal",
      "partData": {
          "Head": "head2",
          "Body": "body2",
          "Back": "back2",
          "Bottom": "bottom2",
          "Background": "background2",
          "Feet": "feet2",
          "Hand": "head2",
          "Accessory": "accessory2",
          "Top": "top2",
          "Face": "face2"
      },
      "sold": true,
      "playerID": "63326e577023390013777e05",
      "withdrawn": false
  },
  {
    "_id": "632ed3dcedbc649a2d15a186",
    "valid": true,
    "images": [
        "https://mkf-air-storage.s3.ap-southeast-1.amazonaws.com/OPNFT_2460_4b0c6bedcf.png"
    ],
    "ownerAddress": "",
    "sequence": 2,
    "collectionName": "op_halloween2022",
    "data": {
        "strength": 1,
        "endurance": 1,
        "intelligence": 1,
        "spirit": 1,
        "perception": 1,
        "dexterity": 1
    },
    "name": "testing02",
    "chainName": "solana",
    "mintAddress": "11223345",
    "nftID": "002",
    "type": "normal",
    "partData": {
        "Head": "head2",
        "Body": "body2",
        "Back": "back2",
        "Bottom": "bottom2",
        "Background": "background2",
        "Feet": "feet2",
        "Hand": "head2",
        "Accessory": "accessory2",
        "Top": "top2",
        "Face": "face2"
    },
    "sold": true,
    "playerID": "63326e577023390013777e05",
    "withdrawn": false
}
]

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

  const list = map(ntfData, (item) => {
    return (
      <StyledNftItem>
        <div style={{padding: '0 20px'}}>
            {get(item, 'images[0]') && (
              <div style={{width: '300px'}}><img src={item.images[0]} width="100%" /></div>
            )}
            <StyledNftID>{item.nftID}</StyledNftID>
          </div>
      </StyledNftItem>
    )
  })

  return (
    <StyledContainer>
      <StyledCongrats>Congratulations!</StyledCongrats>
      <StyledSliderWrapper>
        <Slider {...settings}>
          <div >
            <div style={{width: 'calc(50vw - 300px - 40px)', height: '20px'}} />
          </div>
          {list}
          {/* {list}
          {list}
          {list} */}
        </Slider>
      </StyledSliderWrapper>

      <StyledBtnWrapper>
        <RoundBtn>
          <StyledBtnText>
            Goto my collections
          </StyledBtnText>
        </RoundBtn>
      </StyledBtnWrapper>
    </StyledContainer>
  )
}

export default Nft