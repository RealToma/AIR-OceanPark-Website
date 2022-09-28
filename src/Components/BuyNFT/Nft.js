import styled from 'styled-components'
import Bg from "../../Assets/image/congrats-bg.png"

const StyledContainer = styled.div`
  position: relative;
  padding-top: 37px;
  max-width: 100%;
  margin: auto;
  text-align: center;
  @media (min-width: 900px) {
    width: 834px;
    max-width: 100%;
    border: 1px solid red;
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

  const StyledCongrats = styled.div`
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
  `

  return (
    <StyledContainer>
      <img src={Bg} width="100%" />
      <StyledCongrats>Congratulations!</StyledCongrats>
    </StyledContainer>
  )
}

export default Nft